import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import './Navigator.css';

const Navigator = () => (
  <Router>
    <div className="main">
      <div className="header">
        <h1>Bookstore</h1>
        <ul>
          <li>
            <Link to="/" id="home">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" id="categories">Categories</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default Navigator;
