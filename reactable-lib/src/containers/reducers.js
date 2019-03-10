import { combineReducers } from 'redux';
import tableReducer from './Table/reducer';

export default function createReducer(){
  return combineReducers({
    table: tableReducer
  });
}
