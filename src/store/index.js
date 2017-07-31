import { combineReducers, applyMiddleware, createStore } from 'redux';
import { reducer } from 'react-redux-oauth2';
import cities from './citiesReducer';
import { localStorageMiddlware } from '../utils/localStorage';

const store = createStore(
  combineReducers({ cities, oauth: reducer }),
  applyMiddleware(localStorageMiddlware)
);

export default store;