import React from 'react';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => (
  <li className="book">
    <div className="book-content-container">
      <div className="book-content">
        <h4 className="book-category">{props.category}</h4>
        <h2 className="book-title">{props.title}</h2>
        <h3 className="book-author">{props.author}</h3>
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
          <CircularProgressbar value={props.progress} text={`${props.progress}%`} />
        </div>
        <div className="progress-text">
          <p className="">{props.progress}%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
    </div>
    <div className="vertical-line">
    </div>
    <div className="current-chapter-container">
      <p>CURRENT CHAPTER</p>
      <p>CHAPTER {props.currentChapter}</p>
      <button type="button" className="progress-button">UPDATE PROGRESS</button>
    </div>
  </li>
);

export default Book;