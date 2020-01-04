const yaml = require('js-yaml')
const fs = require('fs')

module.exports = {
  configureWebpack: (config) => {
    fs.writeFileSync('webpack.config.yaml', yaml.dump(config))
  }
}
