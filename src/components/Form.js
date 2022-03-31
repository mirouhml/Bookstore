import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const { addBook } = props;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const categories = ['Action', 'Adventure', 'Classics', 'Detective', 'Mystery', 'Fantasy', 'Historical Fiction', 'Horror', 'Literary Fiction', 'Romance', 'Science Fiction', 'Thriller'];
  return (
    <div>
      <h2 className="form-title">Add a new book</h2>
      <form>
        <input type="text" placeholder="Book title" id="book-title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder="Author" id="book-author" value={author} onChange={(event) => setAuthor(event.target.value)} />
        <select id="categories-dropdown" name="categories">
          {categories.map((category) => (
            <option key={uuidv4()} value={category}>{category}</option>
          ))}
        </select>
        <button
          className="progress-button"
          type="button"
          onClick={() => {
            addBook({
              item_id: uuidv4(),
              title,
              author,
              category: document.getElementById('categories-dropdown').value,
            });
            setTitle('');
            setAuthor('');
            document.getElementById('book-title').value = title;
            document.getElementById('book-author').value = author;
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default Form;
