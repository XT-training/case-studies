let express = require('express');
let router = express.Router();
const invoiceController = require('./invoiceController');

router.route('/').get(invoiceController.get);

router.route('/:id').get(invoiceController.getAllDetails);

module.exports = router;
