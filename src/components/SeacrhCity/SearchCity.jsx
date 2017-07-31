import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import addCity from '../../actions/addCity';
import SearchResult from './components/SearchResult';
import LocationDetect from './components/LocationDetect';
import { urlByName } from '../../utils/buildUrl';
import './SearchCity.css';

class SearchCity extends PureComponent {
  state = {
    city: null,
    error: null
  }

  resetForm = () => {
    this.input.value = '';
    this.setState({ city: null });
  }

  onSubmit = (e) => {
    e.preventDefault();

    axios.get(urlByName(this.input.value))
      .then(({ data: { name, sys: { country, id } } })=> {
        this.setState({ 
          city: { name, country, id },
          error: null });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { city, error } = this.state;
    const { addCity, cities } = this.props;

    return (
      <div className="SearchCity">
        <form onSubmit={this.onSubmit}>
          <label>
            Add new city
            <input
              className="SearchCity__input"
              type="text"
              placeholder="Kiev"
              pattern=".{3,}"
              title="3 characters minimum"
              required
              ref={input => this.input = input}
            />
          </label>
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        {city &&
          <SearchResult
            city={city}
            addCity={addCity}
            resetForm={this.resetForm}
          />
        }
        {error &&
          <div className="SearchCity__error">Some error happened</div>
        }
        <LocationDetect addCity={addCity} cities={cities}/>
      </div>
    );
  }
}

SearchCity.propTypes = {
  addCity: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired,
}

export default connect(
  ({ cities }) => ({ cities }),
  { addCity }
)(SearchCity);
