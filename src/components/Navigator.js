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

const toggleActive = (e) => {
  e.target.parentNode.parentNode.childNodes.forEach((child) => {
    if (child.classList.contains('active')) {
      const child2 = child;
      child2.className = 'inactive';
    }
  });
  e.target.parentNode.className = 'active';
};

const Navigator = () => (
  <Router>
    <div className="main">
      <div className="header">
        <h1>Bookstore</h1>
        <ul>
          <li className="active">
            <Link to="/" id="home" onClick={toggleActive}>BOOKS</Link>
          </li>
          <li className="inactive">
            <Link to="/categories" id="categories" onClick={toggleActive}>CATEGORIES</Link>
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
