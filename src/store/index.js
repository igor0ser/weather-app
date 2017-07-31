import { combineReducers, applyMiddleware, createStore } from 'redux';
import cities from './citiesReducer';
import { localStorageMiddlware } from '../utils/localStorage';

const reducer = combineReducers({ cities });

const store = createStore(reducer, applyMiddleware(localStorageMiddlware));

export default store;