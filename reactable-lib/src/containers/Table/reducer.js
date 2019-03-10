const initialState = [];

function tableReducer(state = initialState, {type, data}) {
  switch(type){
    case 'FETCH_DATA_SUCCESS':
      return [...state, ...data];
    default:
      return state;
  }
}


export default tableReducer;
