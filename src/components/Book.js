import React from 'react';

const Book = (props) => (
  <li>
    <h4>{props.category}</h4>
    <h2>{props.title}</h2>
    <h3>{props.author}</h3>
    <p>{props.progress}</p>
  </li>
);

export default Book;