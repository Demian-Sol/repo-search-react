import * as types from './types';

export const setSearchValue = value => (
  {
    type: types.SET_SEARCH_VALUE,
    value,
  }
);

export const setResults = results => (
  {
    type: types.SET_RESULTS,
    results,
  }
);

export const setError = error => (
  {
    type: types.SET_ERROR,
    error,
  }
);
