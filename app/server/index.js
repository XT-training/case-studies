/* eslint-disable */
const express = require('express');
const resolve = require('path').resolve;
const logger = require('./logger');
const redis = require('redis');

const port = require('./port');

const app = express();
const client = redis.createClient(6379);

const redisKey = 'invoice_';

let isRedisEnabled = false;

const getPage = (req, res) => {
  const pageRenderer = require(resolve(process.cwd(), 'build/compiledServer/server.js')).default;
  return pageRenderer(req, res);
}
const requestHandler = (req, res, next) => {
  const acceptHeaders = (req.headers && req.headers.accept) || '';
  if(acceptHeaders.indexOf('text/html') > -1) {
    if(isRedisEnabled){
      const cacheKey = `${redisKey}${req.url}`;
      return client.get(cacheKey, (err, html) => {
        if(html){
          console.log('serving from redis cache');
          res.send(html);
        } else {
          const pageHtml = getPage(req, res);
          client.set(cacheKey, pageHtml, redis.print);
          res.send(pageHtml);
        }
      });
    }
    const pageHtml = getPage(req, res);
    res.send(pageHtml);
    return;
  }
  next();
};

client.on('connect', function() {
  isRedisEnabled = true;
  console.log('Redis client connected');
});

client.on('error', function (err) {
  isRedisEnabled = false;
  console.log('Could not connect to redi client ' + err);
});

app.use('/', express.static('build'));

app.use('/cache/invalidate', (req, res) => {
  client.flushdb((err, success) => {
    if(success){
      res.json({
        'status': 'success',
        'message': 'cache invalidated'
      });
    } else {
      res.json({
        'status': 'success',
        'message': 'cache invalidated'
      });
    }
  });
});

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
