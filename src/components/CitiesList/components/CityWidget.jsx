import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { urlById } from '../../../utils/buildUrl';
import CityWeather from './CityWeather';
import './CityWidget.css';

class CityWidget extends PureComponent{
  state = {
    weather: null
  }

  componentDidMount() {
    axios.get(urlById(this.props.city.id))
      .then(({ data: { main } }) => {
        const weather = {
          tempMin: main.temp_min,
          tempMax: main.temp_max,
          humidity: main.humidity
        };

        this.setState({ weather });
      });
  }

  render(){
    const { 
      city: { id, name, country },
      removeCity
    } = this.props;

    const { weather } = this.state;

    return (
      <li className="CityWidget" key={id}>
        <h3 className="CityWidget__name">{name}, {country}</h3>
        {weather ? <CityWeather {...weather} /> : 'Loading'}
        <button
          className="CityWidget__remove"
          onClick={() => removeCity(id)}
        />
      </li>
    )
  }
}

CityWidget.propTypes = {
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired,
    removeCity: PropTypes.func.isRequired
};

export default CityWidget;