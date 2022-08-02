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
            scriptPath('Jenkinsfile')
        }
    }
    triggers {
        githubPush()
    }

}