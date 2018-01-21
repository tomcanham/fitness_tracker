export const SET_COMPILER = '@@Hello/SET_COMPILER';
export const SET_FRAMEWORK = '@@Hello/SET_FRAMEWORK';

export function setCompiler(compiler) {
  return dispatch => dispatch({ type: SET_COMPILER, compiler });
}

export function setFramework(framework) {
  return dispatch => dispatch({ type: SET_FRAMEWORK, framework });
}
