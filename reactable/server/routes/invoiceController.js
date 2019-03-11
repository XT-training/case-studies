const Invoice = require('../model/InvoiceModel');

const filter = {
  ALL: 'all',
  STATUS: 'status',
};

// order : asc | desc

exports.get = (req, res) => {
  const {
    startindex = 0,
    itemsperpage = 2,
    orderby,
    order = 'asc',
  } = req.query;
  Invoice.count({}, (err, count) => {
    if (err) {
      res.status(500).send(err);
    }
    Invoice.find({})
      .sort({ [orderby]: order })
      .skip(parseInt(startindex, 10))
      .limit(parseInt(itemsperpage, 10))
      .exec((error, invoice) => {
        if (error) {
          res.status(500).send(error);
        }
        const metaData = {
          count,
          startindex,
          itemsperpage,
        };
        if (orderby) {
          metaData.orderby = orderby;
          metaData.order = order;
        }
        res.status(200).json({
          data: invoice,
          metaData,
        });
      });
  });
};
