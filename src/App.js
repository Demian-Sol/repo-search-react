import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  setSearchValue as setSValue,
  selectSearchValue,
  selectResults,
} from './store';

function App() {
  return (
    <div className="App">
      
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
