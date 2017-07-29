import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CityWidget extends PureComponent{
  render(){
    const { 
      city: { id, name, country },
      removeCity
    } = this.props;

    return (
      <li className="CitiesList__item" key={id}>
        {name}, {country}
        <button
          className="CitiesList__remove"
          onClick={() => removeCity(id)}
        />
      </li>
    )
  }
}

CitiesList.propTypes = {
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
    removeCity: PropTypes.func.isRequired
};

export default CityWidget;