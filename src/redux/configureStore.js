import { combineReducers, createStore } from 'redux';
import * as bookReducers from './books/books';
import * as categoryReducers from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducers,
  categories: categoryReducers,
});

const store = createStore(rootReducer);

export default store;
