/* eslint consistent-return:0 import/order:0 */

const express = require('express');
const logger = require('./logger');
const fs = require('fs');
const { join } = require('path');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const mongoose = require('mongoose');

const invoiceRouter = require('./routes/invoice');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

const dbURI =
  'mongodb+srv://avinash:test123@reactable-mxnew.gcp.mongodb.net/reactable?retryWrites=true';

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10,
};

mongoose
  .connect(
    dbURI,
    options,
  )
  .then(
    () => {
      console.log('Database connection established!');
    },
    err => {
      console.log('Error connecting Database instance due to: ', err);
    },
  );

const loadJSON = file => {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    console.error('Server Index.js ::: loadJSON :::', 'Error loading:', file);
  }
  return null;
};

app.use('/api/invoice', invoiceRouter);

app.get('/mockData/*', (req, res) => {
  console.log('path is ', req.path);
  res.json(loadJSON(join(process.cwd(), 'server', req.path)));
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
