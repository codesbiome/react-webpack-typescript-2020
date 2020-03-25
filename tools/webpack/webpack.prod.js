const path = require('path');
const cwd = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpack = require('./webpack.common');

//-------------------------------------
// Webpack Production Configuration
//-------------------------------------

const productionConfig = commonWebpack.config({
  /** Mode of this configuration */
  mode: 'production',

  /** Output files */
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  /** Plugins for production build */
  plugins: [
    new HtmlWebpackPlugin({
      template: commonWebpack.settings.htmlTemplateFile,
      inject: true,
    }),
  ],

  /** Stats to output in console */
  stats: 'errors-warnings',

  /** Optimization of production build */
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
});

//-------------------------------------
// Modules Exporting
//-------------------------------------

module.exports = productionConfig;
