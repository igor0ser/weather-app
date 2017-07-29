import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import removeCity from '../../actions/removeCity';
import './CitiesList.css';

const CitiesList = ({ cities, remove }) => (
    <ul
        className="CitiesList"
    >
        {cities.map(({ name, country, id }) =>
          <li className="CitiesList__item" key={id}>
            {name}, {country}
            <button
              className="CitiesList__remove"
              onClick={() => remove(id)}
            />
          </li>
        )}
    </ul>
);

CitiesList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired,
    remove: PropTypes.func.isRequired
};

export default connect(
  ({ cities }) => ({ cities }),
  { remove: removeCity }
)(CitiesList);
