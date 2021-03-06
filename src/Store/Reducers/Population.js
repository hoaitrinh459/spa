import {
  POPULATION_PREFECTURE_REQUEST,
  POPULATION_PREFECTURE_SUCCESS,
  POPULATION_PREFECTURE_FAILURE,
  POPULATION_PREFECTURE_NO_CHECKED_REQUEST,
  POPULATION_PREFECTURE_NO_CHECKED_SUCCESS,
  POPULATION_PREFECTURE_NO_CHECKED_FAILURE,
  POPULATION_PREFECTURE_CHECKED_REQUEST,
  POPULATION_PREFECTURE_CHECKED_SUCCESS,
  POPULATION_PREFECTURE_CHECKED_FAILURE,
} from '../Constants/Population';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: {},
  dataAll: {},
};

function population(state = initialState, payload) {
  switch (payload.type) {
    case POPULATION_PREFECTURE_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case POPULATION_PREFECTURE_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        dataAll: {
          ...state.dataAll,
          [payload.id]: [payload.name, payload.dataAll],
        },
        data: { ...state.data, [payload.id]: [payload.name, payload.dataAll] },
      };
    case POPULATION_PREFECTURE_FAILURE:
      return {
        ...state,
        requesting: false,
        message: payload.message,
      };

    case POPULATION_PREFECTURE_CHECKED_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case POPULATION_PREFECTURE_CHECKED_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: { ...state.data, [payload.id]: state.dataAll[payload.id] },
      };
    case POPULATION_PREFECTURE_CHECKED_FAILURE:
      return {
        ...state,
        requesting: false,
        message: payload.message,
      };

    case POPULATION_PREFECTURE_NO_CHECKED_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case POPULATION_PREFECTURE_NO_CHECKED_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const newData = state.data;
      delete newData[payload.id];
      return {
        ...state,
        requesting: false,
        success: true,
        data: newData,
      };
    case POPULATION_PREFECTURE_NO_CHECKED_FAILURE:
      return {
        ...state,
        requesting: false,
        message: payload.message,
      };

    default:
      return state;
  }
}

const ReducerPopulation = { population };

export default ReducerPopulation;
