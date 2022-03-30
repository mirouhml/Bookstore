import BooksDataService from '../../services/BooksService';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';

const addBook = (book) => async (dispatch) => {
  try {
    const res = await BooksDataService.addBook(book);
    dispatch({
      type: ADD_BOOK,
      payload: res.data,
      book,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const removeBook = (id) => async (dispatch) => {
  try {
    const res = await BooksDataService.removeBook(id);
    dispatch({
      type: REMOVE_BOOK,
      payload: res.data,
      id,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const getBooks = () => async (dispatch) => {
  try {
    const res = await BooksDataService.getBooks();
    const books = [];
    Object.keys(res.data).forEach((key) => {
      books.push({
        item_id: key,
        title: res.data[key][0].title,
        author: res.data[key][0].author,
        category: res.data[key][0].category,
      });
    });
    dispatch({
      type: GET_BOOKS,
      books,
    });
    return Promise.resolve(books);
  } catch (err) {
    return Promise.reject(err);
  }
};

const reducer = (books = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.book];
    case REMOVE_BOOK:
      return books.filter((book) => (book.item_id !== action.id));
    case GET_BOOKS:
      return action.books;
    default: return books;
  }
};

export { addBook, removeBook, getBooks };
export default reducer;
