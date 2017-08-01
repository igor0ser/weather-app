import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dispatchRemoveCity from '../../actions/removeCity';
import CityWitget from './components/CityWidget';
import './CitiesList.css';

const CitiesList = ({ cities, removeCity }) => (
  <ul
    className="CitiesList"
  >
    {cities.map(city => (
      <CityWitget
        city={city}
        key={city.id}
        removeCity={removeCity}
      />
    ))}
  </ul>
);

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  removeCity: PropTypes.func.isRequired
};

export default connect(
  ({ cities }) => ({ cities }),
  { removeCity: dispatchRemoveCity }
)(CitiesList);
