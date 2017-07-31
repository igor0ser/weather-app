import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchResult extends PureComponent {
  onBtnClick = (isAgreed) => {
    const { city, addCity, resetForm } = this.props;
    if (isAgreed) {
      addCity(city);
    }
    resetForm();
  }

  componentDidMount() {
    this.yesBtn.focus();
  }

  render(){
    const { city: { name, country } } = this.props;

    return (
      <div className="SearchCity__question">
        <span>
          Do you want to add <b>{name}, {country}</b> to your list
        </span>
        <button
          onClick={() => this.onBtnClick(true)}
          ref={input => this.yesBtn = input}
          className="btn"
        >
          Yes
        </button>
        <button onClick={() => this.onBtnClick(false)} className="btn">
          No
        </button>
      </div>
    );
  }
}

SearchResult.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  addCity: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default SearchResult;
