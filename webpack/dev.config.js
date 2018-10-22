const mainConfig = require('./main.config.js')

module.exports = {
  ...mainConfig,
  devtool: 'inline-source-map',
  mode: 'development',
}
