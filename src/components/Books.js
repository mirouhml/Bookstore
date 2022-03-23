import React, { useState, useEffect } from 'react';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([
        {
          id: uuidv4(),
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          category: 'Action',
          progress: 0,
        },
        {
          id: uuidv4(),
          title: 'Dune',
          author: 'Frank Herbert',
          category: 'Science Fiction',
          progress: 0,
        },
      ]);
  }, []);

  return (
    <ul>
      {
        books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} category={book.category} progress={book.progress} />
        ))
      }
    </ul>
  );
};

export default Books;