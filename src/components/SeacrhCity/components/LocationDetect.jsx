import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getLocation from '../../../utils/getLocation';
import { urlByCoords } from '../../../utils/buildUrl';
import axios from 'axios';

class LocationDetect extends PureComponent {
  state = {
    city: null
  }

  onBtnClick = (isAgreed) => {
    const { addCity } = this.props;
    if (isAgreed) {
      addCity(this.state.city);
    }
    this.setState({ city: null })
  }

  componentDidMount() {
    getLocation()
      .then(({ coords }) => axios.get(urlByCoords(coords)))
      .then(({ data }) => {
        const { name, id, sys: { country } } = data;
        const city = { name, country, id };
        this.setState({ city });
      });
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
  addCity: PropTypes.func.isRequired
}

export default LocationDetect;
