import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResultCard.module.scss';
import { TRANSLATIONS } from '../constants';

const propTypes = {
  resultInfo: PropTypes.object,
  id: PropTypes.number,
  stargazersCount: PropTypes.number,
  watchersCount: PropTypes.number,
  name: PropTypes.string,
  url: PropTypes.string,
};
const defaultProps = {
  resultInfo: {},
  id: null,
  stargazersCount: null,
  watchersCount: null,
  name: '',
  url: '',
};

const SearchResultsCard = ({
  resultInfo: { id, name, url, watchersCount, stargazersCount },
}) => (
  <div key={id} className={styles['card-container']}>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
    <div className={styles['secondary-info']}>
      <p>
        {TRANSLATIONS.WATCHERS_LABEL}
        {watchersCount}
      </p>
      <p>
        {TRANSLATIONS.STARGAZERS_LABEL}
        {stargazersCount}
      </p>
    </div>
  </div>
);

SearchResultsCard.propTypes = propTypes;
SearchResultsCard.defaultProps = defaultProps;

export default SearchResultsCard;
