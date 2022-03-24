import React from 'react';
import './Form.css';

const Form = () => (
  <div>
    <h2>Add a new book</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <select id="categories-dropdown" name="categories">
        <option value="action" select disabled>Categories</option>
        <option value="action">Action</option>
        <option value="science fiction">Science Fiction</option>
        <option value="fantasy">Fantasy</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
