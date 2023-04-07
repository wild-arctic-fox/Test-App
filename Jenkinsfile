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
            // environment {
            //     AWS_ACCESS_KEY_ID = credentials('aws-secret-root-id')
            //     AWS_SECRET_ACCESS_KEY = credentials('aws-root-secret-key')
            //     APP_NAME = 'express-app'
            // }
            steps {
                script {
                    // gv.deployApp()
                    // sh 'envsubst < k8s/express-server.yaml | kubectl apply -f -'
                    sh 'echo deploy'
                }
            }
        }
    }
}
