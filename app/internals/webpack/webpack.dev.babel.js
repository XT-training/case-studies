/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const clientBuild = require('./webpack.base.babel')({
  mode: 'development',

  // Add hot reloading in development
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});

const serverBuild = require('./webpack.base.babel')({
  mode: 'development',
  target: 'node',

  entry: { server: [path.join(process.cwd(), 'server/pageRenderer.js')] },

  // Don't use hashes in dev mode for better performance
  output: {
    path: path.join(process.cwd(), 'build/compiledServer'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },

  plugins: [],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});

module.exports = [clientBuild, serverBuild];
