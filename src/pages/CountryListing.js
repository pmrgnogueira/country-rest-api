import { useState, useCallback, useEffect, useContext } from 'react';

import CountryList from '../components/CountryList';
import Layout from '../components/Layout';
import CountryControls from '../components/CountryControls';
import FilteringContext from '../store/filter-context';

const CountryListing = () => {
  const {
    updateCountries,
    countries,
    filteredCountries,
    updateFilteredCountries
  } = useContext(FilteringContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;capital;flag;alpha2Code;alpha3Code;'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const countriesWithAlpha = data.filter(country => country.alpha2Code);

      updateCountries(countriesWithAlpha);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, [updateCountries]);

  const countriesLength = countries.length;
  useEffect(() => {
    if (countriesLength) return;
    fetchCountries();
  }, [fetchCountries, countriesLength]);

  const updatefilterCountries = filtered => {
    updateFilteredCountries(filtered);
  };

  let countriesToList = filteredCountries.length
    ? filteredCountries
    : countries;

  return (
    <Layout>
      <CountryControls countries={countries} onfilter={updatefilterCountries} />
      {loading && <p>Loading countries...</p>}
      {error && <p>Something went wrong..</p>}
      {!loading && !error && <CountryList countries={countriesToList} />}
    </Layout>
  );
};

export default CountryListing;
