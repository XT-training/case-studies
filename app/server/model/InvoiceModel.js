const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var InvoiceSchema = new Schema({
  Invoice: Number,
  Created: String,
  Status: String,
  Department: String,
  Client: String,
  Service: String,
  Worked: Number,
  Rate: Number,
  Total: String,
});

var Invoice = mongoose.model('invoice', InvoiceSchema, 'invoice');
module.exports = Invoice;
