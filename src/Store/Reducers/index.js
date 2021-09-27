import { combineReducers } from 'redux';
import ReducerPrefecture from './Prefecture';
import ReducerPopulation from './Population';

const reducers = combineReducers({
  listPrefecture: ReducerPrefecture.getListPrefecture,
  population: ReducerPopulation.population,
});

export default (state, action) => reducers(state, action);
