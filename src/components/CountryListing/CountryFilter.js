import { useContext, useCallback, useEffect } from 'react';

import CountryContext from '../../store/country-context';
import classes from './CountryFilter.module.scss';
import Search from './Search';
import Select from './Select';

import { REGIONAL_BLOCK } from '../../helper/contants';

const CountryFilter = () => {
  const {
    countries,
    setFilteredCountries,
    searchTerm,
    setSearchTerm,
    selectedRegion,
    setSelectedRegion
  } = useContext(CountryContext);

  const filterByRegion = useCallback((region, countries) => {
    return countries.filter(country => {
      return country.region.indexOf(region) === 0;
    });
  }, []);

  const filterByName = useCallback((name, countries) => {
    return countries.filter(country => {
      return country.name.toLowerCase().indexOf(name) === 0;
    });
  }, []);

  useEffect(() => {
    if (!searchTerm && selectedRegion === REGIONAL_BLOCK[0]) {
      setFilteredCountries(null);
      return;
    }

    let filteredCountries = countries;

    if (selectedRegion && selectedRegion !== REGIONAL_BLOCK[0]) {
      filteredCountries = filterByRegion(selectedRegion, filteredCountries);
    }
    if (searchTerm) {
      filteredCountries = filterByName(searchTerm, filteredCountries);
    }

    setFilteredCountries(filteredCountries);
  }, [
    filterByName,
    filterByRegion,
    countries,
    searchTerm,
    selectedRegion,
    setFilteredCountries
  ]);

  return (
    <div className={classes.Controlers}>
      <Search
        value={searchTerm}
        onSearch={searchValue => setSearchTerm(searchValue)}
      />
      <Select
        value={selectedRegion}
        onSelect={selectedValue => setSelectedRegion(selectedValue)}
      />
    </div>
  );
};

export default CountryFilter;
