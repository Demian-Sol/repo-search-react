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
import { DEBOUNCE_TIME } from './config';
import { debounce } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false,
      axiosSource: null,
    };

    this.makeRequest = searchVal => {
      const { isSent, axiosSource } = this.state;
      const { setResults, setError } = this.props;

      if (isSent) axiosSource.cancel();
      this.setState({ isSent: true });
      axios.get(BASE_SEARCH_URL + searchVal.trim(), {
        cancelToken: axiosSource.token,
      })
        .then(response => {
          this.setState({ isSent: false });
          setResults(mapResponseToResults(response));
        })
        .catch(error => {
          this.setState({ isSent: false });
          setError(error.code + error.message);
        });
    };

    this.initiateDebounce = debounce(this.makeRequest, DEBOUNCE_TIME);
  }

  componentDidMount() {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    this.setState({ axiosSource: source });
  }

  componentDidUpdate(prevProps) {
    const { searchValue } = this.props;
    if (prevProps.searchValue !== searchValue && searchValue.trim().length >= 3) {
      this.initiateDebounce(searchValue);
    }
  }

  render() {
    const { searchValue, setSearchValue, results } = this.props;
    return (
      <div className="App">
        <Layout
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          results={results}
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
