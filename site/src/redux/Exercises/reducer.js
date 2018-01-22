import {
  FETCH_ALL_START,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from './actions';

function getInitialState() {
  return {
    exercises: [],
  };
}

export default function(state = getInitialState(), action) {
  switch (action.type) {
    case FETCH_ALL_START:
      return Object.assign({}, state, { loading: true, error: null });

    case FETCH_ALL_SUCCESS: {
      return Object.assign({}, state, { loading: false, error: null, exercises: action.exercises });
    }

    case FETCH_ALL_FAILURE: {
      return Object.assign({}, state, { loading: false, error: action.error });
    }

    default:
      return state;
  }
}
