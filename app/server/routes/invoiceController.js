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
  const promises = [
    Invoice.countDocuments(filterObj).exec(),
    Invoice.find(filterObj)
      .sort({ [orderby]: order })
      .skip(parseInt(startindex, 10))
      .limit(parseInt(itemsperpage, 10))
      .exec(),
  ];
  Promise.all(promises)
    .then(data => {
      const [count, invoices] = data;
      const metaData = getMetaData(
        count,
        startindex,
        itemsperpage,
        orderby,
        order,
        filter,
      );

      res.status(200).json({
        data: invoices,
        metaData,
      });
    })
    .catch(error => {
      res.status(500).send(error);
    });
};

exports.getAllDetails = (req, res) => {
  const { id } = req.params;
  const promises = [Invoice.findOne({ _id: id }).exec()];
  Promise.all(promises)
    .then(data => {
      const [invoice] = data;
      res.status(200).json({
        data: invoice,
      });
    })
    .catch(error => {
      res.status(500).send(error);
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

const getMetaData = (
  count,
  startindex,
  itemsperpage,
  orderby,
  order,
  filter,
) => {
  const metaData = {
    count,
    startindex,
    itemsperpage,
    columnHeader: {
      _id: 'ID',
      Invoice: 'Invoice',
      Created: 'Created on',
      Status: 'Status',
      Department: 'Department',
      Client: 'Client Name',
      Service: 'Service',
      Worked: 'Worked Hrs',
      Rate: 'Rate/Hr',
      Total: 'Total Cost',
    },
  };
  if (orderby) {
    metaData.orderby = orderby;
    metaData.order = order;
  }
  if (filter.length) {
    metaData.filter = filter;
  }
  return metaData;
};
