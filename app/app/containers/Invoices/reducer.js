import { FETCH_DATA_SUCCESS, FETCH_INVOICE_SUCCESS } from './constant';

const initialState = [];

export function invoicesReducer(state = initialState, { type, data }) {
  switch (type) {
    case FETCH_DATA_SUCCESS:
      return data;
    default:
      return state;
  }
}

export function invoiceReducer(state = {}, { type, data }) {
  switch (type) {
    case FETCH_INVOICE_SUCCESS:
      return data;
    default:
      return state;
  }
}
