import { FIND_TERM } from '../actions/index';

function termReducer(state = '', action) {
  if (action.type === FIND_TERM) {
    return action.payload;
  }
  return state;
}

export default termReducer;
