var express = require('express');
var router = express.Router();
const invoiceController = require('./invoiceController');

router
    .route('/')
    .get(invoiceController.get)

module.exports = router;
