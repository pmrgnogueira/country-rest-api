import { useContext } from 'react';

import FilteringContext from '../../store/filter-context';
import classes from './CountryControls.module.scss';
import Search from '../UI/Search';
import Select from '../UI/Select';
import { debouncer } from '../../helper/debouncer';

const CountryControls = ({ onfilter }) => {
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
    <section className={classes.Controlers}>
      <Search
        value={!isFilteredBySelect && filterTherm ? filterTherm : ''}
        onSearch={searchTherm => debouncedfunction(searchTherm)}
      />
      <Select
        value={isFilteredBySelect && filterTherm ? filterTherm : ''}
        onSelect={searchTherm => searchHandler(searchTherm, true)}
      />
    </section>
  );
};

export default CountryControls;
