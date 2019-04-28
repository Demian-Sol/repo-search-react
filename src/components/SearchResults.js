import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsCard from './SearchResultCard';

const propTypes = {
  results: PropTypes.array,
};
const defaultProps = {
  results: [],
};

const SearchResults = ({ results }) => {
  return results.map(result => (
    <SearchResultsCard resultInfo={result} />
  ));
};

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default SearchResults;
