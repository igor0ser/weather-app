import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import SearchCity from './components/SeacrhCity/SearchCity';
import CitiesList from './components/CitiesList/CitiesList';

const App = ({ isAuthorized }) => (
  <div className="App">
    <Header />
    {isAuthorized && (
      <div>
        <SearchCity />
        <CitiesList />
      </div>
    )}
    <Auth />
  </div>
);

App.propTypes = {
  isAuthorized: PropTypes.bool.isRequired
};

export default connect(
  ({ auth: { isAuthorized } }) => ({ isAuthorized })
)(App);
