const mongoose = require('mongoose');
const { Schema } = mongoose;

const InvoiceSchema = new Schema({
  index: Number,
  status: String,
  department: String,
  created: String,
  due: String,
  client: String,
  service: String,
  customer: String,
  worked: Number,
  rate: String,
  memo: String,
  items: Array,
});

const Invoice = mongoose.model('invoices', InvoiceSchema, 'invoices');
module.exports = Invoice;
