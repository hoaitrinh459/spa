import {
  LIST_PREFECTURE_REQUEST,
  LIST_PREFECTURE_SUCCESS,
  LIST_PREFECTURE_FAILURE,
} from '../Constants/Prefecture';

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null,
};

function getListPrefecture(state = initialState, payload) {
  switch (payload.type) {
    case LIST_PREFECTURE_REQUEST:
      return {
        ...state,
        requesting: true,
      };
    case LIST_PREFECTURE_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data,
      };
    case LIST_PREFECTURE_FAILURE:
      return {
        ...state,
        requesting: false,
        message: payload.message,
      };

    default:
      return state;
  }
}

const ReducerPrefecture = { getListPrefecture };

export default ReducerPrefecture;
