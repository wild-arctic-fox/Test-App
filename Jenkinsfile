pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    echo 'Building the docker image...'
                    withCredentials([usernamePassword(credentialsId: 'my-dockerhub-repo', passwordVariable: 'PASSW', usernameVariable: 'USER')]) {
                        sh 'docker build -t wildarcticfox/wild-private-repo:node-2.0 .'
                        sh "echo $PASSW | docker login -u $USER --password-stdin"
                        sh 'docker push wildarcticfox/wild-private-repo:node-2.0'
                    }
                }
            }
        }
        stage('test') {
            steps {
                script {
                    echo 'Testing the application...'
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    echo 'Deploying the application...'
                }
            }
        }
    }
}

