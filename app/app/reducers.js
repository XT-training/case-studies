/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';
import { invoicesReducer, invoiceReducer } from './containers/Invoices/reducer';
import PaginationReducer from './containers/Pagination/reducer';
import SortReducer from './containers/Sort/reducer';
import FilterReducer from './containers/FilterStatus/reducer';
import UserReducer from './containers/User/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    invoices: invoicesReducer,
    invoice: invoiceReducer,
    pagination: PaginationReducer,
    sort: SortReducer,
    filter: FilterReducer,
    user: UserReducer,
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
