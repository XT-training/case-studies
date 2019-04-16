/* eslint-disable */
const express = require('express');
const resolve = require('path').resolve;
const logger = require('./logger');

const port = require('./port');

const app = express();

app.use('/', express.static('build'));

const requestHandler = (req, res, next) => {
  const acceptHeaders = (req.headers && req.headers.accept) || '';
  if(acceptHeaders.indexOf('text/html') > -1) {
    const pageRenderer = require(resolve(process.cwd(), 'build/compiledServer/server.js')).default;
    res.send(pageRenderer(req, res));
  }
  next();
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
  console.log('server started on port ', port);
});
