
pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t webapp-project:${BUILD_NUMBER} .'
            }
        }

        stage('Deploy Application') {
            steps {
                sh '''
                    docker rm -f webapp-container || true
                    docker run -d \
                        --name webapp-container \
                        -p 3000:3000 \
                        webapp-project:${BUILD_NUMBER}
                '''
            }
        }
    }
}
