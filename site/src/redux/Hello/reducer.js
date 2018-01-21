import {
  SET_COMPILER,
  SET_FRAMEWORK,
} from './actions';

function getInitialState() {
  return {
    compiler: 'Babel',
    framework: 'React',
  };
}

export default function(state = getInitialState(), action) {
  switch (action.type) {
    case SET_COMPILER:
      return Object.assign({}, state, { compiler: action.compiler });

    case SET_FRAMEWORK: {
      return Object.assign({}, state, { framework: action.framework });
    }

    default:
      return state;
  }
}
