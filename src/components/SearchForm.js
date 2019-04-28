import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static propTypes = {
    setSeachValue: PropTypes.func,
  }

  static defaultProps = {
    setSeachValue: () => null,
  }

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
        placeholder="search repos"
        onInput={this.handleInput}
        value={searchValue}
      />
    );
  }
}


export default SearchForm;
