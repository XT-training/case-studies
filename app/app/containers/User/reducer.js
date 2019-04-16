import {
  LOGIN,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from './constant';

const initialState = {
  userInfo: null,
  accessToken: '',
  errorMessage: '',
};

function reducer(
  state = initialState,
  { type, userInfo, accessToken, message = '' },
) {
  switch (type) {
    case LOGIN:
      return initialState;
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        userInfo,
        accessToken,
        errorMessage: message,
      };
    case LOGIN_ERROR:
      return {
        userInfo: null,
        accessToken: '',
        errorMessage: message,
      };
    case LOGOUT:
      return {
        userInfo: null,
        accessToken: '',
        errorMessage: '',
      };
    default:
      return state;
  }
}

export default reducer;
