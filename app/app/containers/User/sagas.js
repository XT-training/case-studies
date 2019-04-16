import { put, takeEvery, call } from 'redux-saga/effects';
import { loginSuccess, loginError } from './actions';

import { LOGIN } from './constant';

const callLoginApi = (url, params) =>
  fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

function* login({ params }) {
  const url = new URL('http://localhost:5000/api/user/authenticate');
  const response = yield call(callLoginApi, url, params);
  const { data, status, message } = yield call([response, 'json']);
  if (status === 'success' && data) {
    return yield put(loginSuccess(data.userInfo, data.accessToken));
  }
  return yield put(loginError(message));
}

export default function* watchFetchData() {
  yield takeEvery(LOGIN, login);
}
