const path = require('path');
const cwd = process.cwd();
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** Export Module */
module.exports = {
  mode: 'production',
  entry: path.join(cwd, 'src/index.tsx'),
  output: {
    path: path.join(cwd, 'dist/'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(cwd, 'src/index.html'),
      inject: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@components': path.join(cwd, 'src/components'),
    },
  },
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
};
