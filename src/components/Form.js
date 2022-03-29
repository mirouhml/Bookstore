import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const { addBook } = props;
  return (
    <div>
      <h2>Add a new book</h2>
      <form>
        <input type="text" placeholder="Book title" id="book-title" />
        <input type="text" placeholder="Author" id="book-author" />
        <select id="categories-dropdown" name="categories" defaultValue="Categories">
          <option value="categories" selected disabled>Categories</option>
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <button
          type="button"
          onClick={() => addBook({
            id: uuidv4(),
            title: document.getElementById('book-title').value,
            author: document.getElementById('book-author').value,
            category: document.getElementById('categories-dropdown').value,
            progress: 0,
            chapters: 40,
            currentChapter: 1,
          })}
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
