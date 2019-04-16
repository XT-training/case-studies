/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');

const clientBuild = require('./webpack.base.babel')({
  name: 'client',
  mode: 'development',

  // Add hot reloading in development
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'app/app.js'), // Start with js/app.js
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  // Add development plugins
  plugins: [],

  // Emit a source map for easier debugging
  // See https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },
});

const serverBuild = require('./webpack.base.babel')({
  name: 'server',
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
