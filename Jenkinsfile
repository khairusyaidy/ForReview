pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/khairusyaidy/ForReview.git'
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
		success {
			dependencyCheckPublisher pattern: 'dependency-check-report.xml'
		}
	}
}