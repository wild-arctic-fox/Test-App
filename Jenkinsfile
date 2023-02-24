#!/usr/bin/env groovy

@Library('jenkins-shared')
def gv

pipeline {
    agent any
    tools {nodejs "my-node"}
    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("inc version") {
            steps {
                script {
                    def current_app_version = sh(script:"npm pkg get version | xargs echo", returnStdout: true).trim()
                    env.IMAGE_NAME = "$current_app_version-$BUILD_NUMBER"
                    // env.IMAGE_NAME = "$current_app_version"
                    echo "image name: $IMAGE_NAME"
                }
            }
        }
        stage("build image") {
            steps {
                script {
                   buildImage "wildarcticfox/wild-private-repo:$IMAGE_NAME"
                }
            }
        }
        stage("run test") {
            steps {
                script {
                    gv.runTest()
                }
            }
        }
        stage("deploy") {
            environment {
                AWS_ACCESS_KEY_ID = credentials('aws-secret-root-id')
                AWS_SECRET_ACCESS_KEY = credentials('aws-root-secret-key')
            }
            steps {
                script {
                    gv.deployApp()
                    sh 'kubectl version'
                }
            }
        }
        // stage("commit version update") {
        //     steps {
        //         script {
        //             // sshagent (credentials: ['ssh-key-second']) {
        //             //  //   sh "git remote set-url origin https://${USER}:${PASSW}@github.com/wild-arctic-fox/Test-App.git"
        //             //     sh "git status"
        //             //    // sh "git add *"
        //             //     sh "git commit --amend -m'[ci skip] $IMAGE_NAME'"
        //             //     sh "git push origin HEAD:main"
        //             // }
        //         }
        //     }
        // }
    }
}
