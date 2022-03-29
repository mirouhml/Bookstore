import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayMessage } from '../redux/categories/categories';
import './Categories.css';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categories">
      <h2>Categories</h2>
      <button type="button" onClick={() => dispatch(displayMessage('Under Construction'))}>{status}</button>
    </div>
  );
};

export default Categories;
