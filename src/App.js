import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import {
  setSearchValue as setSValue,
  selectSearchValue,
  selectResults,
} from './store';
import Layout from './components/Layout';

function App({searchValue, setSearchValue, results}) {
  return (
    <div className="App">
      <Layout
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

const mapStateToProps = state => (
  {
    searchValue: selectSearchValue(state),
    results: selectResults(state),
  }
);
const mapDispatchToProps = {
  setSearchValue: setSValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
