const fs = require('fs')
const execSync = require('child_process').execSync
const execGitCmd = (cmd) => execSync(cmd).toString().replace(/\n$/,'')

const pluginName = 'gitHistory'
const defaultOptions = {
  floderName: 'dist',
  txtName: 'Git版本信息'
}

class GitHistory {
  constructor (options) {
    this.options = {
      ...defaultOptions,
      ...options,
    }
  }

  apply (compiler) {
    const { floderName, txtName } = this.options

    compiler.hooks.afterEmit.tap(pluginName, (compilation) => {
      var logger = fs.createWriteStream(`./${floderName}/${txtName}.txt`)

      let date = new Date().toLocaleString()
      let user = execGitCmd('git config user.name')
      let gitBranch = execGitCmd(`git symbolic-ref --short -q HEAD`)
      let gitID = execGitCmd(`git log -n 1 --pretty=format:"%H"`)
      let info = execGitCmd('git log --stat -5')

      logger.write(`commit date:: ${date} \n`)
      logger.write(`commit username:: ${user} \n`)
      logger.write(`commit branch:: ${gitBranch} \n`)
      logger.write(`commit hash:: ${gitID} \n`)
      logger.write(`::commit history::\n${info}`)

      logger.end()
    })
  }
}

module.exports = GitHistory