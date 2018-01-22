import fetch from 'isomorphic-fetch';

export const CALL_START = '@@ApiCall/CALL_START';
export const CALL_SUCCESS = '@@ApiCall/CALL_SUCCESS';
export const CALL_FAILURE = '@@ApiCall/CALL_FAILURE';
export const API_ROOT = '/api/v1';

export function callApi(path, { method = 'GET' }) {
  return async (dispatch) => {
    dispatch({ type: CALL_START, path, method });

    const response = await fetch(`${API_ROOT}${path}`);

    if (response.status >= 400) {
      console.log(response);
      const error = {
        status: response.status,
        message: response.statusText,
        headers: response.headers,
        url: response.url,
      };
      dispatch({ type: CALL_FAILURE, error });
      throw new Error(error);
    }

    const data = await response.json();
    dispatch({ type: CALL_SUCCESS, response, data });

    return data;
  };
}
