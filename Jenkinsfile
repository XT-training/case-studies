#!/usr/bin/groovy
// by Mayank


pipeline {
    agent any
    environment {
        DOCKER_IMAGE_NAME = "mayank2610/movieapi"
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:8-alpine' 
                }
            }

            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    app = docker.build(DOCKER_IMAGE_NAME)
                }
            }
        }
        stage('Push Docker Image') { 
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'team2-docker-hub-credentials') {
                        app.push("${env.BUILD_NUMBER}")
                        app.push("latest")
                    }
                }
            }
        }
        stage('DeployToProduction') {
            steps {
                input 'Deploy to Production?'
                milestone(1)
                //implement Kubernetes deployment here
                deploy('live')
            }
        }
    }
}

def deploy(environment) {
	def containerName = ''
	def port = ''
    if ("${environment}" == 'live') {
		containerName = "movie-api-live"
		port = "8181"
	}
	else {
		println "Environment not valid"
		System.exit(0)
	}

	sh "docker ps -f name=${containerName} -q | xargs --no-run-if-empty docker stop"
	sh "docker ps -a -f name=${containerName} -q | xargs -r docker rm"
	sh "docker run -d -p ${port}:9999 --name ${containerName} mayank2610/movieapi"
  
}