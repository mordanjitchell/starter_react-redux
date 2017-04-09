import { NEW_TODO, DELETE_TODO } from '../actions/index';

export default function newTodo(state = [], action) {
  if (action.type === NEW_TODO) {
    return [...state, action.payload];
  }
  if (action.type === DELETE_TODO) {
    const itemId = action.payload;
    return state.filter(item => item !== itemId);
  }
  return state;
}
