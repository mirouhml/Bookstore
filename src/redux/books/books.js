const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const reducer = (books = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.book];
    case REMOVE_BOOK:
      return books.filter((book) => (book.id !== action.id));
    default: return books;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export { addBook, removeBook };
export default reducer;
