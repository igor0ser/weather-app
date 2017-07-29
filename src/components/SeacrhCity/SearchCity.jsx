import React, { PureComponent } from 'react';
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
      //.then(({ data: { name, sys: { country, id } } }) => {
      .then(({ data })=> {
        console.log(data);
        const { name, id, sys: { country } } = data;
        const city = { name, country, id };
        console.log(city);
        this.setState({ city, error: null });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  render() {
    const { city, error } = this.state;
    const { addCity } = this.props;

    return (
      <div className="SearchCity">
        <form onSubmit={this.onSubmit}>
          <label>
            Add new city
            <input
              className="SearchCity__input"
              type="text"
              placeholder="Kiev"
              required
              ref={input => this.input = input}
            />
          </label>
          <input type="submit" className="btn" />
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
        <LocationDetect addCity={addCity} />
      </div>
    );
  }
}

export default connect(null, { addCity })(SearchCity);
