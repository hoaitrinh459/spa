import {
  LIST_PREFECTURE_REQUEST,
  LIST_PREFECTURE_SUCCESS,
  LIST_PREFECTURE_FAILURE,
} from '../Constants/Prefecture';

import Prefecture from '../../API/Prefecture';

const getListPrefecture = () => async dispatch => {
  try {
    dispatch({ type: LIST_PREFECTURE_REQUEST });
    const response = await Prefecture.getListPrefecture();
    const responseBody = response.data.result;
    dispatch({
      type: LIST_PREFECTURE_SUCCESS,
      data: responseBody,
    });
  } catch (error) {
    dispatch({
      type: LIST_PREFECTURE_FAILURE,
      message: error,
    });
  }
};

const ActionPrefecture = { getListPrefecture };

export default ActionPrefecture;
