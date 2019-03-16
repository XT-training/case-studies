const initialState = [];

function InvoiceReducer(state = initialState, { type, data }) {
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return data;
    default:
      return state;
  }
}

export default InvoiceReducer;
