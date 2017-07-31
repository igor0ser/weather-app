import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header/Header';
import SearchCity from './components/SeacrhCity/SearchCity';
import CitiesList from './components/CitiesList/CitiesList';
import g from './utils/auth'; 

import './styles.css';

class App extends Component {
  render = () => (
    <div className="App">
      <Header />
      <SearchCity />
      <CitiesList />
    </div>
  );
}

ReactDOM.render(
  <Provider  store={store}><App /></Provider>,
  document.getElementById('root')
);

g();