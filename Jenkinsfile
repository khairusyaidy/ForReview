pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/khairusyaidy/ForReview.git'
            }
        }
        stage('Code Quality Check via SonarQube') {
            steps {
                script {
                    def scannerHome = tool 'SonarQube'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner -Dsonar.token=sqp_9e49e13e532f807e8878360b957e0f4755442516  -Dsonar.host.url=http://192.168.1.15:9000 -Dsonar.projectKey=OWASP -Dsonar.sources=."
                    }
                }
            }
        }
		
		stage('OWASP Dependency-Check Vulnerabilities') {
			steps {
				dependencyCheck additionalArguments: '--format HTML --format XML', 
				nvdCredentialsId: 'nvd-api-key',
				odcInstallation: 'OWASP Dependency-Check Vulnerabilities'
				
			}
		}
	}	
    post {
        always {
            recordIssues enabledForFailure: true, tool: sonarQube()
        }
    }
}
