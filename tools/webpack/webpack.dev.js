const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpack = require('./webpack.common');

//-------------------------------------
// Webpack Development Configuration
//-------------------------------------

const devConfig = commonWebpack.config({
  /** Mode of this configuration */
  mode: 'development',

  /** Entry points */
  entry: [
    'react-hot-loader/patch',
    path.join(cwd, commonWebpack.settings.mainEntryFile),
  ],

  /** Output files */
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  /** Plugins for development build */
  plugins: [
    /** Hot Module Replacement Plugin*/
    new webpack.HotModuleReplacementPlugin(),

    /** HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: commonWebpack.settings.htmlTemplateFile,
      inject: true,
    }),
  ],

  /** Stats to output in console */
  stats: 'errors-warnings',

  /** Dev Server */
  devServer: {
    stats: 'errors-warnings',
    hot: true,
  },

  /** Optimization of development build */
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  /** Performance of development build */
  performance: {
    hints: false,
  },

  /** Aliases to resolve */
  alias: {
    'react-dom': '@hot-loader/react-dom',
  },

  /** Source Maps Devtool */
  devtool: 'cheap-module-source-map',
});

//-------------------------------------
// Modules Exporting
//-------------------------------------

module.exports = devConfig;
