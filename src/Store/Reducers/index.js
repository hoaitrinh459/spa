import { combineReducers } from 'redux';
import ReducerPrefecture from './Prefecture';

const reducers = combineReducers({
  listPrefecture: ReducerPrefecture.getListPrefecture,
});

export default (state, action) => reducers(state, action);
