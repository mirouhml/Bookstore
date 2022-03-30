import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook, getBooks } from '../redux/books/books';
import Book from './Book';
import './Books.css';
import Form from './Form';

const Books = () => {
  const [books, setBooks] = useState([]);
  const booksInit = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    setBooks(booksInit);
  }, [booksInit]);

  const addBookAction = (book) => {
    dispatch(addBook(book));
  };

  const removeBookAction = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="books-container">
      <ul>
        {
          books.map((book) => (
            <Book
              key={book.item_id}
              item_id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
              removeBook={removeBookAction}
            />
          ))
        }
        <li className="form-item"><Form addBook={addBookAction} removeBook={removeBookAction} /></li>
      </ul>
    </div>
  );
};

export default Books;
