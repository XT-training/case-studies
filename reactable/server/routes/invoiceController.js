const Invoice = require('../model/InvoiceModel');

// order : asc | desc

exports.get = (req, res) => {
  const {
    startindex = 0,
    itemsperpage = 2,
    orderby,
    order = 'asc',
  } = req.query;
  const filter = req.query.filter ? JSON.parse(req.query.filter) : [];
  const filterObj = getFilterObj(filter);
  console.log('-----', filterObj);
  Invoice.count(filterObj, (err, count) => {
    if (err) {
      res.status(500).send(err);
    }
    Invoice.find(filterObj)
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
        if (filter.length) {
          metaData.filter = filter;
        }
        res.status(200).json({
          data: invoice,
          metaData,
        });
      });
  });
};

const getFilterObj = filterArr => {
  const filterObj = {};
  filterArr.forEach(filter => {
    const key = Object.keys(filter)[0];
    if (typeof filter[key] === 'object') {
      filterObj[key] = {
        [`$gte`]: filter[key].start,
        [`$lte`]: filter[key].end,
      };
    } else {
      filterObj[key] = filter[key];
    }
  });
  return filterObj;
};
