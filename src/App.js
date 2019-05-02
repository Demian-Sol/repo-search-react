import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
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
import { DEBOUNCE_TIME, MIN_CHARS_TO_SEARCH } from './config';
import { debounce } from './utils';

const propTypes = {
  searchValue: PropTypes.string,
  setResults: PropTypes.func,
  setError: PropTypes.func,
  setSearchValue: PropTypes.func,
  results: PropTypes.array,
};
const defaultProps = {
  setResults: () => null,
  setError: () => null,
  setSearchValue: () => null,
  results: [],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false,
      axiosSource: null,
    };

    this.debouncedSearch = debounce(this.makeRequest, DEBOUNCE_TIME);
  }

  componentDidMount() {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    this.setState({ axiosSource: source });
  }

  componentDidUpdate(prevProps) {
    const { searchValue } = this.props;
    if (prevProps.searchValue !== searchValue
    && searchValue.trim().length >= MIN_CHARS_TO_SEARCH) {
      this.debouncedSearch(searchValue);
    }
  }

  makeRequest = searchVal => {
    const { isSent, axiosSource } = this.state;
    const { setResults, setError } = this.props;
    const { CancelToken } = axios;
    const source = CancelToken.source();

    if (isSent) {
      axiosSource.cancel();
      // to ensure request sending
      this.setState({ isSent: false, axiosSource: source }, () => this.makeRequest(searchVal));
    }

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

App.propTypes = propTypes;
App.defaultProps = defaultProps;

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
=======

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
>>>>>>> master
