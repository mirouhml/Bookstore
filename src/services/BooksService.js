import http from '../http-common';

const getBooks = () => http.get('/books');

const addBook = (book) => http.post('/books', book);

const removeBook = (id) => http.delete(`/books/${id}`);

const BooksService = {
  getBooks,
  addBook,
  removeBook,
};

export default BooksService;
