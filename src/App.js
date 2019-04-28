import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  setSearchValue as setSValue,
  setResults as setR,
  setError as setErr,
  selectSearchValue,
  selectResults,
  mapResponseToResults,
} from './store';
import Layout from './components/Layout';
import { BASE_SEARCH_URL } from './constants';

class App extends Component {
  state = {
    isSent: false,
  }

  componentDidUpdate(prevProps) {
    const { searchValue, setResults, setError } = this.props;
    if (prevProps.searchValue !== searchValue && searchValue.trim().length >= 3) {
      axios.get(BASE_SEARCH_URL + searchValue.trim())
        .then(response => {
          // const results = ;
          setResults(mapResponseToResults(response));
        })
        .catch(error => setError(error.code + error.message));
    }
  }

  render() {
    const { searchValue, setSearchValue, results } = this.props;
    return (
      <div className="App">
        <Layout
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    searchValue: selectSearchValue(state),
    results: selectResults(state),
  }
);
const mapDispatchToProps = {
  setSearchValue: setSValue,
  setResults: setR,
  setError: setErr,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
