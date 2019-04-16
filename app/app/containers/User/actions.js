import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  LOGOUT,
} from './constant';

export const login = params => ({
  type: LOGIN,
  params,
});

export const loginSuccess = (userInfo, accessToken) => ({
  type: LOGIN_SUCCESS,
  userInfo,
  accessToken,
});

export const loginError = message => ({
  type: LOGIN_ERROR,
  message,
});

export const logout = () => ({
  type: LOGOUT,
});

export const register = params => ({
  type: REGISTER,
  params,
});

export const registerSuccess = (userInfo, accessToken) => ({
  type: REGISTER_SUCCESS,
  userInfo,
  accessToken,
});
