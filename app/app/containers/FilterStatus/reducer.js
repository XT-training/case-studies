const initialState = {
  count: 0,
  itemsperpage: 10,
  startindex: 0
};

function FilterReducer(state = initialState, { type, metaData }) {
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        status: metaData.status
      };
    default:
      return state;
  }
}

export default FilterReducer;
