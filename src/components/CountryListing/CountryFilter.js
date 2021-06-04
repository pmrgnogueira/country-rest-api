import { useContext } from 'react';

import FilteringContext from '../../store/filter-context';
import classes from './CountryFilter.module.scss';
import Search from './Search';
import Select from './Select';
import { debouncer } from '../../helper/debouncer';

const CountryFilter = ({ onfilter }) => {
  console.log('CountryFilter');
  const {
    countries,
    filterTherm,
    filterHandler,
    isFilteredBySelect,
    selectHandler
  } = useContext(FilteringContext);

  const searchHandler = (searchTherm, isSelect) => {
    const regex = new RegExp('^' + searchTherm, 'i');
    const searchParam = isSelect ? 'region' : 'name';
    const filteredContries = countries.filter(country =>
      country[searchParam].match(regex)
    );

    let isEmptyResults = searchTherm && !filteredContries.length;

    onfilter(filteredContries, isEmptyResults);
    selectHandler(isSelect);
    filterHandler(searchTherm);
  };

  const debouncedfunction = debouncer(searchHandler);

  return (
    <div className={classes.Controlers}>
      <Search
        value={!isFilteredBySelect && filterTherm ? filterTherm : ''}
        onSearch={searchTherm => debouncedfunction(searchTherm)}
      />
      <Select
        value={isFilteredBySelect && filterTherm ? filterTherm : ''}
        onSelect={searchTherm => searchHandler(searchTherm, true)}
      />
    </div>
  );
};

export default CountryFilter;
