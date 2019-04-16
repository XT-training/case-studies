import { all } from 'redux-saga/effects';
import invoiceSaga from './containers/Invoices/sagas';
import userSaga from './containers/User/sagas';

export default function* rootSaga() {
  yield all([invoiceSaga(), userSaga()]);
}
