import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TRANSLATIONS } from '../constants';

const propTypes = {
  setSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
};
const defaultProps = {
  setSearchValue: () => null,
  searchValue: '',
};

class SearchForm extends Component {
  handleInput = event => {
    const { setSearchValue } = this.props;
    const { value } = event.target;

    setSearchValue(value);
  }

  render() {
    const { searchValue } = this.props;

    return (
      <input
        type="text"
        placeholder={TRANSLATIONS.SEARCHBOX_PLACEHOLDER}
        // no arrow functions to prevent function redeclaration during re-render
        onInput={this.handleInput}
        value={searchValue}
      />
    );
  }
}

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

export default SearchForm;
