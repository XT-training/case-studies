import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './constant';

const initialState = {
  userInfo: null,
  accessToken: '',
};

function reducer(state = initialState, { type, userInfo, accessToken }) {
  switch (type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        userInfo,
        accessToken,
      };
    default:
      return state;
  }
}

export default reducer;
