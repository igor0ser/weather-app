import React from 'react';
import PropTypes from 'prop-types';

const CityWeather = ({ tempMin, tempMax, humidity }) => (
  <span className="CityWeather">
    {tempMin} - {tempMax}°C
    <br />
    humidity: {humidity}%
  </span>
);

CityWeather.propTypes = {
  tempMin: PropTypes.number.isRequired,
  tempMax: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired
};

export default CityWeather;
