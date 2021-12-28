const merge = require('webpack-merge').merge
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    host: 'localhost',
    port: 8000,
  },
})