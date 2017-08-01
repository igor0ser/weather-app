import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getLocation from '../../../utils/getLocation';
import { urlByCoords } from '../../../utils/buildUrl';

class LocationDetect extends PureComponent {
  state = {
    city: null
  }

  componentDidMount() {
    getLocation()
      .then(({ coords }) => axios.get(urlByCoords(coords)))
      .then(({ data: { name, id, sys: { country } } }) => {
        if (!this.props.cities.find(city => city.id === id)) {
          this.setState({
            city: { name, country, id }
          });
        }
      });
  }

  onBtnClick = (isAgreed) => {
    const { addCity } = this.props;
    if (isAgreed) {
      addCity(this.state.city);
    }
    this.setState({ city: null });
  }

  render() {
    const { city } = this.state;
    if (!city) return null;

    return (
      <div className="SearchCity__question">
        <span>Are you in the <b>{city.name}, {city.country}</b>?</span>
        <button onClick={() => this.onBtnClick(true)} className="btn">
          Yes
        </button>
        <button onClick={() => this.onBtnClick(false)} className="btn">
          No
        </button>
      </div>
    );
  }
}

LocationDetect.propTypes = {
  addCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
};

export default LocationDetect;
