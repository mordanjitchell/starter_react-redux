import { combineReducers } from 'redux';
import termReducer from './termReducer';
import newTodo from './todoReducer';

const rootReducer = combineReducers({
  termReducer,
  newTodo,
});

export default rootReducer;
