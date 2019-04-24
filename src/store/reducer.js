import * as types from './types';

const initialState = {
  searchValue: '',
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
