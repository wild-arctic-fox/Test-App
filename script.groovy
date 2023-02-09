def buildImage() {
    echo 'building the docker image...'
    withCredentials([usernamePassword(credentialsId: 'my-dockerhub-repo', passwordVariable: 'PASSW', usernameVariable: 'USER')]) {
        sh 'docker build -t wildarcticfox/wild-private-repo:node-2.1 .'
        sh "echo $PASSW | docker login -u $USER --password-stdin"
        sh 'docker push wildarcticfox/wild-private-repo:node-2.1'
    }
}

def runTest() {
    echo 'running tests...'
    sh "npm --version"
}

def deployApp() {
    echo 'deploying the application...'
}

return this
