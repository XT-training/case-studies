const Invoice = require("../model/InvoiceModel");

const filter = {
  ALL : "all",
  STATUS: "status",
}

// order : asc | desc

exports.get = (req, res) => {
  const { startIndex = 0, itemPerPage = 2, orderby, order = 'asc' } = req.query;
  Invoice.count( {}, (err, count) => {
    if (err) {
      res.status(500).send(err);
    }
    Invoice.find({})
      .sort( { [orderby] : order } )
      .skip(parseInt(startIndex))
      .limit(parseInt(itemPerPage))
      .exec((err, invoice) => {
        if (err) {
          res.status(500).send(err);
        }
        const metaData = {
          count,
          startIndex,
          itemPerPage,
        }
        if (orderby) {
          metaData.orderby = orderby;
          metaData.order = order;
        }
        res.status(200)
          .json({
            data : invoice,
            metaData
          });
      });
  })
};
