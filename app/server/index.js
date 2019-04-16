/* eslint-disable */
const express = require('express');
const logger = require('./logger');

const port = require('./port');

const app = express();


const requestHandler = (req, res) => {
  const pageRenderer = require(process.cwd(), 'build/compiledServer/server.js');
  res.send(pageRenderer());
};

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('*', requestHandler);

// Start your app.
app.listen(port, async err => {
  if (err) {
    return logger.error(err.message);
  }
  return null;
});
