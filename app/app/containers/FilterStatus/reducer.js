const initialState = [];

function FilterReducer(state = initialState, { type, metaData }) {
  switch (type) {
    case 'FETCH_DATA_SUCCESS':
      return metaData.filter ? [...metaData.filter] : [];
    default:
      return state;
  }
}

export default FilterReducer;
