export const FIND_TERM = 'FIND_TERM';
export function findTerm(term) {
  return {
    type: FIND_TERM,
    payload: term,
  };
}

export const NEW_TODO = 'NEW_TODO';
export function addTODO(term) {
  return {
    type: NEW_TODO,
    payload: term,
  };
}

export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(item) {
  return {
    type: DELETE_TODO,
    payload: item,
  };
}
