import * as types from './types';

const initialState = {
  searchValue: '',
  results: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value,
      };
    case types.SET_RESULTS:
      return {
        ...state,
        results: action.results,
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
