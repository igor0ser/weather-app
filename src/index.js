import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AddCity from './components/AddCity/AddCity';
import Header from './components/Header/Header';
import CitiesList from './components/CitiesList/CitiesList';

import './styles.css';

class App extends Component {
  render = () => (
    <div className="App">
      <Header />
      <AddCity />
      <CitiesList />
    </div>
  );
}

ReactDOM.render(
  <Provider  store={store}><App /></Provider>,
  document.getElementById('root')
);
