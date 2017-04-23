export function selectBook(book) {
  //SelectBook is an ActionCreator. It needs to return an action - an object
  //with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
