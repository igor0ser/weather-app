import { combineReducers, applyMiddleware, createStore } from 'redux';
import { localStorageMiddlware } from '../utils/localStorage';
import cities from './citiesReducer';
import auth from './authReducer';

const store = createStore(
  combineReducers({ cities, auth }),
  applyMiddleware(localStorageMiddlware)
);

export default store;