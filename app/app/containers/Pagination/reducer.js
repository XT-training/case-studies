const initialState = {
  count: 0,
  itemsperpage: 10,
  startindex: 0,
};

function PaginationReducer(state = initialState, { type, metaData }) {
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return {
        count: metaData.count,
        itemsperpage: parseInt(metaData.itemsperpage, 10),
        startindex: parseInt(metaData.startindex, 10),
        filter:JSON.stringify(metaData.filter)
      };
    default:
      return state;
  }
}

export default PaginationReducer;
