const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')
const env = require('yargs').argv.env

let config = env === 'development' ? devConfig : proConfig;

module.exports = merge(baseConfig, config);