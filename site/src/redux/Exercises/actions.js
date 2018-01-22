import { callApi } from '../ApiCall/actions';

export const FETCH_ALL_START = '@@Exercises/FETCH_ALL_START';
export const FETCH_ALL_SUCCESS = '@@Exercises/FETCH_ALL_SUCCESS';
export const FETCH_ALL_FAILURE = '@@Exercises/FETCH_ALL_FAILURE';

export function fetchAll() {
  return async (dispatch) => {
    dispatch({ type: FETCH_ALL_START });
    let exercises = [];

    try {
      exercises = await dispatch(callApi('/exercises', { method: 'GET' }));
      dispatch({ type: FETCH_ALL_SUCCESS, exercises });
    } catch (ex) {
      dispatch({ type: FETCH_ALL_FAILURE, error: ex });
    }

    return exercises;
  };
}
