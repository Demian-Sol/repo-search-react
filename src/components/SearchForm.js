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
    const { setSeachValue } = this.props;
    const { value } = event.target;

    if (value.length > 5) setSeachValue(value);
  }

  render() {
    return (
      <input type="text" placeholder="search repos" onInput={this.handleInput} />
    );
  }
}

export default SearchForm;
