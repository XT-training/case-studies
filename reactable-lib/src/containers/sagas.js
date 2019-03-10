import { put, call, takeEvery, all } from 'redux-saga/effects';
import { fetchDataSuccess } from './actions';

export function* fetchData({ fetchData, settings }){
  const response = yield call(fetchData, settings);
  console.log("response is ", response);
  const { data, metadata } = response;
  yield put(fetchDataSuccess(data, metadata));
}

export function* watchFetchData(){
  yield takeEvery('FETCH_DATA', fetchData);
}

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
