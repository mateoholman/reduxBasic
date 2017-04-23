//The state argument in this function is not application state. It is only
//the state the reducer is respondible for.
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
