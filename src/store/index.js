import { combineReducers, applyMiddleware, createStore } from 'redux';
import cities from './citiesReducer';
import { localStorageMiddlware } from '../utils/localStorage';

const store = createStore(
  combineReducers({ cities }),
  applyMiddleware(localStorageMiddlware)
);

export default store;