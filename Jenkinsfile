pipeline {


    agent any environment {

        BUILD_IDS="${env.BUILD_ID}"

    }

    stages {
        stage("Automation start") {
            steps {
                sh 'node --version'
                sh 'npm i'
                sh 'npm run cy:verify'
                sh 'npm run pretest'
            }

        }

        stage("Parallel Testing") {

            parallel {
                stage("CI Machine #1") {
                    steps {

                        sh 'npm run cy:cloud:io'
                    }
                }

                stage("CI Machine #2") {
                    steps {

                        sh 'npm run cy:cloud:io'
                    }
                }

                stage("CI Machine #3") {
                    steps {

                        sh 'npm run cy:cloud:io'
                    }
                }

                stage("CI Machine #4") {
                    steps {

                        sh 'npm run cy:cloud:io'
                    }
                }

                stage("CI Machine #5") {
                    steps {

                        sh 'npm run cy:cloud:io'
                    }
                }


            }
        }
    }

    post {
        always {
            sh 'npm run posttest'
            publishHTML(target: [allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'cypress/helpers/reports/mochareports/',
                reportFiles: 'report.html',
                reportName: 'HTML Report',
                reportTitles: 'Cypress Report'
                ])
        }
    }
}