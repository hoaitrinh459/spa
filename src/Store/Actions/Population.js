import {
  POPULATION_PREFECTURE_REQUEST,
  POPULATION_PREFECTURE_SUCCESS,
  POPULATION_PREFECTURE_FAILURE,
  POPULATION_PREFECTURE_NO_CHECKED_REQUEST,
  POPULATION_PREFECTURE_NO_CHECKED_SUCCESS,
  POPULATION_PREFECTURE_NO_CHECKED_FAILURE,
} from '../Constants/Population';

import Population from '../../API/Population';

const getPopulation = id => async dispatch => {
  try {
    dispatch({ type: POPULATION_PREFECTURE_REQUEST });
    const response = await Population.getPopulation(id);
    const responseBody = response.data.result.line;
    dispatch({
      type: POPULATION_PREFECTURE_SUCCESS,
      data: responseBody,
      body: id,
    });
  } catch (error) {
    dispatch({
      type: POPULATION_PREFECTURE_FAILURE,
      message: error,
    });
  }
};

const getPopulationNoChecked = id => async dispatch => {
  try {
    dispatch({ type: POPULATION_PREFECTURE_NO_CHECKED_REQUEST });
    dispatch({
      type: POPULATION_PREFECTURE_NO_CHECKED_SUCCESS,
      id,
    });
  } catch (error) {
    dispatch({
      type: POPULATION_PREFECTURE_NO_CHECKED_FAILURE,
      message: error,
    });
  }
};

const ActionPopulation = { getPopulation, getPopulationNoChecked };

export default ActionPopulation;
