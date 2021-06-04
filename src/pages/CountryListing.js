import { useEffect, useContext } from 'react';

import CountryList from '../components/CountryListing/CountryList';
import Layout from '../components/Shared/Layout';
import CountryControls from '../components/CountryListing/CountryControls';
import FilteringContext from '../store/filter-context';
import Loading from '../components/Shared/Loading';
import ErrorComponent from '../components/Shared/ErrorComponent';
import useHttp from '../hooks/use-http';

const REQUEST_URL =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;capital;flag;alpha2Code;alpha3Code;';

const CountryListing = () => {
  const {
    updateCountries,
    countries,
    filteredCountries,
    updateFilteredCountries,
    emptyResults
  } = useContext(FilteringContext);
  const { isLoading, error, sendRequest: fetchCountries } = useHttp();
  const countriesLength = countries.length;

  useEffect(() => {
    if (countriesLength) return;

    const transformCountries = data => {
      const countriesWithAlpha = data.filter(country => country.alpha2Code);
      updateCountries(countriesWithAlpha);
    };

    fetchCountries(REQUEST_URL, transformCountries);
  }, [fetchCountries, countriesLength, updateCountries]);

  const updatefilterCountries = (filtered, isEmpty) => {
    updateFilteredCountries(filtered, isEmpty);
  };

  const countriesToList = filteredCountries.length
    ? filteredCountries
    : countries;
  const showCountryList = !isLoading && !error && !emptyResults;

  return (
    <Layout>
      <CountryControls countries={countries} onfilter={updatefilterCountries} />
      {isLoading && <Loading />}
      {error && <ErrorComponent message={error} />}
      {emptyResults && <ErrorComponent message={'No Countries Found'} />}
      {showCountryList && <CountryList countries={countriesToList} />}
    </Layout>
  );
};

export default CountryListing;
