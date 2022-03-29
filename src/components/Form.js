import React, { useState } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
  const { addBook } = props;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  return (
    <div>
      <h2>Add a new book</h2>
      <form>
        <input type="text" placeholder="Book title" id="book-title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <input type="text" placeholder="Author" id="book-author" value={author} onChange={(event) => setAuthor(event.target.value)} />
        <select id="categories-dropdown" name="categories">
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="fantasy">Fantasy</option>
        </select>
        <button
          type="button"
          onClick={() => {
            addBook({
              id: uuidv4(),
              title,
              author,
              category: document.getElementById('categories-dropdown').value,
              progress: 0,
              chapters: 40,
              currentChapter: 1,
            });
            setTitle('');
            setAuthor('');
            document.getElementById('book-title').value = title;
            document.getElementById('book-author').author.value = author;
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
