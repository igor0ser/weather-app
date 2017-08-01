import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import SearchCity from './components/SeacrhCity/SearchCity';
import CitiesList from './components/CitiesList/CitiesList';
import { connect } from 'react-redux';

class App extends PureComponent {
  render = () => (
    <div className="App">
      <Header />
      {this.props.isAuthorized && (
        <div>
          <SearchCity />
          <CitiesList />
        </div>
      )}
      <Auth />
    </div>
)
};

App.propTypes = {
    isAuthorized: PropTypes.bool.isRequired
};

export default connect(
  ({ auth: { isAuthorized } }) => ({ isAuthorized })
)(App);
