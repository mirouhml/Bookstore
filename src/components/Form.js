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
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <button
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
