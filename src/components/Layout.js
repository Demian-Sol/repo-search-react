import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import styles from './Layout.module.scss';

const Layout = ({searchValue, setSearchValue}) => (
  <div className={styles['']}>
    <div className={styles['']}>
      <SearchForm
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
    <div className={styles['']}>
      
    </div>
  </div>
);

export default Layout;
