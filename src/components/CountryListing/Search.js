import { HiSearch } from 'react-icons/hi';

import classes from './Search.module.scss';

const Search = ({ value, onSearch }) => {
  const changeHandler = e => {
    onSearch(e.target.value);
  };

  return (
    <div className={classes.Search}>
      <HiSearch />
      <input
        type='search'
        value={value}
        name='country filter'
        aria-label='Filter the site flags'
        placeholder='Search for a country...'
        onChange={changeHandler}></input>
    </div>
  );
};

export default Search;
