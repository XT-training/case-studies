import { put, takeEvery, call, select } from 'redux-saga/effects';
import { fetchDataSuccess, fetchInvoiceSuccess } from './actions';

import { FETCH_DATA, FETCH_INVOICE } from './constant';

const callApi = (url, accessToken) =>
  fetch(url, {
    mode: 'cors',
    headers: {
      'x-access-token': accessToken,
    },
  });

function* fetchData({ params }) {
  const sort = yield select(state => state.get('sort'));
  const pagination = yield select(state => state.get('pagination'));
  const accessToken = yield select(state => state.get('user').accessToken);
  const userId = yield select(state => state.get('user').userInfo.id);
  const filter = yield select(state => state.get('filter'));
  let filterObj;
  if (params.filter === false) {
    filterObj = {};
    delete params.filter;
  } else if (filter && filter.length > 0 && !params.filter) {
    filterObj = { filter: JSON.stringify(filter) };
  }
  const url = new URL(`http://localhost:5000/api/user/${userId}/invoice`);
  const searchParams = Object.assign({}, sort, pagination, filterObj, params);
  url.search = new URLSearchParams(searchParams);

  const response = yield call(callApi, url, accessToken);
  const { data, metaData } = yield call([response, 'json']);
  return yield put(fetchDataSuccess(data, metaData));
}

function* fetchInvoice({ id }) {
  const url = new URL(`http://localhost:3000/api/invoice/${id}`);

  const response = yield call(fetch, url);
  const { data } = yield call([response, 'json']);
  return yield put(fetchInvoiceSuccess(data));
}

export default function* watchFetchData() {
  yield takeEvery(FETCH_DATA, fetchData);
  yield takeEvery(FETCH_INVOICE, fetchInvoice);
}
