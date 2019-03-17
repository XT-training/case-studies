const initialState = {
  order: '',
  orderby: '',
};

function SortReducer(state = initialState, { type, metaData }) {
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        order: metaData.order,
        orderby: metaData.orderby,
      };
    default:
      return state;
  }
}

export default SortReducer;
