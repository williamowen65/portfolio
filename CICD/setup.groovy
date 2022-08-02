pipelineJob('portfolio') {
    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        github('williamowen65/portfolio')
                    }
                    branch('*/main')
                }
            }
            scriptPath('CICD/Jenkinsfile')
        }
    }
    triggers {
        githubPush()
    }

}