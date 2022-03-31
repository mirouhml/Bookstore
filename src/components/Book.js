/* eslint-disable camelcase */
/* eslint-disable prefer-template */

import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    item_id, title, category, author, removeBook,
  } = props;
  const progress = Math.floor(Math.random() * 100);
  const chapters = Math.floor(Math.random() * (80 - 40) + 40);
  const currentChapter = Math.floor((chapters * progress) / 100);
  return (
    <li className="book">
      <div className="book-content-container">
        <div className="book-content">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </div>
        <div className="buttons-container">
          <button type="button" className="buttons">Comments</button>
          <div className="line" />
          <button type="button" className="buttons" onClick={() => { removeBook(item_id); }}>Remove</button>
          <div className="line" />
          <button type="button" className="buttons">Edit</button>
        </div>
      </div>
      <div className="progress-content-container">
        <div className="progress-content">
          <div className="progress-bar">
            <CircularProgressbar value={progress} text={`${progress}%`} />
          </div>
          <div className="progress-text">
            <p className="progress">
              {progress}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="vertical-line-container">
          <div className="vertical-line" />
        </div>
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p>
              Chapter
              {' ' + currentChapter}
            </p>
            <button type="button" className="progress-button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
