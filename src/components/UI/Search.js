import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

import classes from './Search.module.scss';

const Search = ({ searchTherm, onSearch }) => {
  const [searchResults, setSearchResults] = useState(searchTherm);

  const changeHandler = e => {
    const { value } = e.target;
    setSearchResults(value);
    onSearch(value);
  };

  return (
    <div className={classes.Search}>
      <HiSearch />
      <input
        type='search'
        value={searchResults}
        name='country filter'
        aria-label='Filter the site flags'
        placeholder='Search for a country...'
        onChange={changeHandler}></input>
    </div>
  );
};

export default Search;
