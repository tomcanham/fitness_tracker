import {
  FETCH_ALL_START,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from './actions';

function getInitialState() {
  return {
    exercises: {},
    orderedExercises: [],
  };
}

export default function(state = getInitialState(), action) {
  switch (action.type) {
    case FETCH_ALL_START:
      return Object.assign({}, state, { loading: true, error: null });

    case FETCH_ALL_SUCCESS: {
      const changes = action.exercises.reduce((a, exercise) => {
        a[exercise.id] = exercise;
        return a;
      }, {});
      const exercises = Object.assign({}, state.exercises, changes);

      const orderedExercises = Object.keys(exercises)
        .sort((id1, id2) => {
          if (exercises[id1].name < exercises[id2].name) {
            return -1;
          } else if (exercises[id1].name > exercises[id2].name) {
            return 1;
          }

          return 0;
        })
        .reduce((a, id) => { a.push(exercises[id]); return a; }, []);

      return Object.assign({}, state, {
        loading: false,
        error: null,
        orderedExercises,
        exercises,
        lastFetched: new Date(),
      });
    }

    case FETCH_ALL_FAILURE: {
      return Object.assign({}, state, { loading: false, error: action.error });
    }

    default:
      return state;
  }
}
