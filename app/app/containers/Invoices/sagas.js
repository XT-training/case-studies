import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchDataSuccess } from './actions';

function* fetchData({ params }) {
  const url = new URL('http://localhost:3000/api/invoice');
  const searchParams = Object.assign(
    {},
    {
      startindex: 0,
      itemsperpage: 10,
    },
    params,
  );
  url.search = new URLSearchParams(searchParams);
  const response = yield call(fetch, url);
  const { data, metaData } = yield call([response, 'json']);
  return yield put(fetchDataSuccess(data, metaData));
}

export default function* watchFetchData() {
  yield takeEvery('FETCH_DATA', fetchData);
}
