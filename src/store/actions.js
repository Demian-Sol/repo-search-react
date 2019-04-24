import * as types from './types';

export const setSearchValue = value => (
  {
    type: types.SET_SEARCH_VALUE,
    value,
  }
);
