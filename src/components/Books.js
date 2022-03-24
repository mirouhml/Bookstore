import React, { useState, useEffect } from 'react';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';
import './Books.css';
import Form from './Form';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([
        {
          id: uuidv4(),
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          category: 'Action',
          progress: 10,
          chapters: 40,
          currentChapter: 2,
        },
        {
          id: uuidv4(),
          title: 'Dune',
          author: 'Frank Herbert',
          category: 'Science Fiction',
          progress: 0,
          chapters: 70,
          currentChapter: 10,
        },
      ]);
  }, []);

  return (
    <div className="books-container">
      <ul>
        {
          books.map((book) => (
            <Book 
              key={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              progress={book.progress}
              chapters={book.chapters}
              currentChapter={book.currentChapter}
            />
          ))
        }
        <li className="form-item"><Form /></li>
      </ul>
    </div>
  );
};

export default Books;