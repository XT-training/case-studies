import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_INVOICE,
  FETCH_INVOICE_SUCCESS,
} from './constant';

export const fetchData = params => ({
  type: FETCH_DATA,
  params,
});

export const fetchDataSuccess = (data, metaData) => ({
  type: FETCH_DATA_SUCCESS,
  data,
  metaData,
});

export const fetchInvoice = id => {
  console.log('id is', id);

  return {
    type: FETCH_INVOICE,
    id,
  };
};

export const fetchInvoiceSuccess = data => ({
  type: FETCH_INVOICE_SUCCESS,
  data,
});
