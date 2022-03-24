import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title, category, author, progress, currentChapter,
  } = props;
  return (
    <li className="book">
      <div className="book-content-container">
        <div className="book-content">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h3 className="book-author">{author}</h3>
        </div>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-content-container">
        <div className="progress-content">
          <div className="progress-bar">
            <CircularProgressbar value={progress} text={`${progress}%`} />
          </div>
          <div className="progress-text">
            <p className="">
              {progress}
              %
            </p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </div>
      <div className="vertical-line" />
      <div className="current-chapter-container">
        <p>CURRENT CHAPTER</p>
        <p>
          CHAPTER
          {currentChapter}
        </p>
        <button type="button" className="progress-button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  currentChapter: PropTypes.number.isRequired,
};

export default Book;
