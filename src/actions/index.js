export function selectBook(book) {
  //selectBook is an actioncreator, it needs an action
  //aka an object with type property

  return {
    type: 'BOOK_SELECTED',
    payload: book
  };

}
