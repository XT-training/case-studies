import Invoice from '../models/invoices';

export const get = (req, res) => {
  const {
    startindex = 0,
    itemsperpage = 2,
    orderby,
    order = 'asc',
  } = req.query;
  const userID = req.body.userId;
  console.log('userId is ', userID);
  const filter = req.query.filter ? JSON.parse(req.query.filter) : [];
  filter.push({ userID });
  const filterObj = getFilterObj(filter);
  const promises = [
    Invoice.countDocuments(filterObj).exec(),
    Invoice.find(filterObj)
      .sort({ [orderby]: order })
      .select({
        index: 1,
        userID: 1,
        status: 1,
        department: 1,
        created: 1,
        client: 1,
        due: 1,
        service: 1,
        worked: 1,
        rate: 1,
        memo: 1,
      })
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

export const getAllDetails = (req, res) => {
  const { id } = req.params;
  const userID = req.body.userId;
  const promises = [Invoice.findOne({ _id: id }).lean().exec()];
  Promise.all(promises)
    .then(data => {
      const [invoice] = data;
      if (invoice.userID !== userID) {

          res.status(403).send({
            status: 'error',
            message: 'Forbidden user'
          });

        } else {

        res.status(200).json({

        data: invoice,

        });

        }
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
      index: 'Invoice',
      created: 'Created on',
      status: 'Status',
      department: 'Department',
      client: 'Client Name',
      service: 'Service',
      worked: 'Worked Hrs',
      rate: 'Rate/Hr',
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
