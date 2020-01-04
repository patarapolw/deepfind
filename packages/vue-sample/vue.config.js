const deepfind = require('@patarapolw/deepfind').default

module.exports = {
  configureWebpack: (config) => {
    console.log(deepfind(config, { loader: 'pug-plain-loader' }))
    console.log(deepfind(config, 'raw-loader'))
  }
}
