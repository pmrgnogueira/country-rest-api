import { useState } from 'react';
import classes from './CountryControls.module.scss';
import Search from './UI/Search';
import Select from './UI/Select';

const CountryControls = ({ countries, onfilter }) => {
  const [currentSearch, setCurrentSearch] = useState('');
  const [currentSelected, setCurrentSelected] = useState('all');

  const debounce = (func, timeout = 200) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  const searchHandler = searchTherm => {
    let regex = new RegExp('^' + searchTherm);
    onfilter(
      countries.filter(country => {
        let name = country.name.toLowerCase();
        return name.match(regex);
      })
    );
    setCurrentSearch(searchTherm);
  };

  const debouncedfunction = debounce(searchHandler);

  const selectHandler = selectValue => {
    let regex = new RegExp(selectValue);
    onfilter(
      countries.filter(country => {
        let name = country.region;
        return name.match(regex);
      })
    );
    setCurrentSelected(selectValue);
  };

  return (
    <section className={classes.Controlers}>
      <Search
        searchTherm={currentSearch}
        onSearch={searchTherm => debouncedfunction(searchTherm)}
      />
      <Select selected={currentSelected} onSelect={selectHandler} />
    </section>
  );
};

export default CountryControls;
