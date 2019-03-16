import { all } from 'redux-saga/effects';
import invoiceSaga from './containers/Invoices/sagas';
export default function* rootSaga() {
  yield all([invoiceSaga()]);
}
