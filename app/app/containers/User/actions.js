import { LOGIN, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS } from './constant';

export const login = params => ({
  type: LOGIN,
  params,
});

export const loginSuccess = (userInfo, accessToken) => ({
  type: LOGIN_SUCCESS,
  userInfo,
  accessToken,
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
