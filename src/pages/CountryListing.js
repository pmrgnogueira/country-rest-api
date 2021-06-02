import { useState, useCallback, useEffect } from 'react';

import CountryList from '../components/CountryList';
import Layout from '../components/Layout';
import CountryControls from '../components/CountryControls';

const CountryListing = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState(() => {
    const countries = sessionStorage.getItem('@country-rest-api/countries');

    return countries && countries.length ? JSON.parse(countries) : [];
  });
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;capital;flag;alpha2Code;'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const dataClean = data.filter(country => country.alpha2Code);

      setCountries(dataClean);
      sessionStorage.setItem(
        '@country-rest-api/countries',
        JSON.stringify(dataClean)
      );
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  const countriesLength = countries.length;
  useEffect(() => {
    if (countriesLength) return;
    fetchCountries();
  }, [fetchCountries, countriesLength]);

  const updatefilterCountries = filtered => {
    setFilteredCountries(filtered);
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
