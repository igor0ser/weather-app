import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './AddCity.css';
import addCity from '../../actions/addCity';

class AddCity extends PureComponent {
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.input.value);
    this.props.addCity(this.input.value);
    this.input.value = '';
  }
  render = () => (
    <form onSubmit={this.onSubmit} className="AddCity">
      <label>
        Add new city
        <input
          className="AddCity__input"
          type="text"
          placeholder="Kyiv"
          required
          ref={input => this.input = input}
        />
      </label>
      <input type="submit" className="btn" />
    </form>
  )
}

AddCity.propTypes = {
  addCity: PropTypes.func.isRequired
};

export default connect(null, { addCity })(AddCity);
