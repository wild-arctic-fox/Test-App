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
                    sh "npm version patch"
                    def current_app_version = sh(script:"npm pkg get version | xargs echo", returnStdout: true).trim()
                    env.IMAGE_NAME = "$current_app_version-$BUILD_NUMBER"
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
            steps {
                script {
                    gv.deployApp()
                }
            }
        }
    }
}
