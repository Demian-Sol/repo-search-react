import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import styles from './Layout.module.scss';

const propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
  results: PropTypes.array,
};
const defaultProps = {
  results: [],
  searchValue: 'N/A',
  setSearchValue: () => null,
};

const Layout = ({ searchValue, setSearchValue, results }) => (
  <div className={styles['layout-container']}>
    <SearchForm
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <SearchResults
      results={results}
    />
  </div>
);

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;
