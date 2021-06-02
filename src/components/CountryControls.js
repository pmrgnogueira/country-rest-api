import { useContext } from 'react';
import classes from './CountryControls.module.scss';
import Search from './UI/Search';
import Select from './UI/Select';
import FilteringContext from '../store/filter-context';

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

    onfilter(filteredContries);
    selectHandler(isSelect);
    filterHandler(searchTherm);
  };

  const debounce = (func, timeout = 200) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const debouncedfunction = debounce(searchHandler);

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
