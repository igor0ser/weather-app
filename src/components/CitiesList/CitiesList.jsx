import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeCity from '../../actions/removeCity';
import './CitiesList.css';

const CitiesList = ({ cities, remove }) => (
    <ul
        className="CitiesList"
    >
        {cities.map(city =>
          <li className="CitiesList__item">
            {city}
            <button
              className="CitiesList__remove"
              onClick={() => remove(city)}
            />
          </li>
        )}
    </ul>
);

CitiesList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    remove: PropTypes.func.isRequired
};

export default connect(
  ({ cities }) => ({ cities }),
  { remove: removeCity }
)(CitiesList);
