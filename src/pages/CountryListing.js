import { useEffect, useContext } from 'react';

import CountryList from '../components/CountryListing/CountryList';
import Layout from '../components/Shared/Layout';
import CountryFilter from '../components/CountryListing/CountryFilter';
import CountryContext from '../store/country-context';
import LoadingComponent from '../components/Shared/LoadingComponent';
import ErrorComponent from '../components/Shared/ErrorComponent';
import useHttp from '../hooks/use-http';

const REQUEST_URL =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;region;capital;flag;alpha2Code;alpha3Code;';

const CountryListing = () => {
  const { countries, filteredCountries, setCountries } =
    useContext(CountryContext);
  const { error, getCountries } = useHttp();

  useEffect(() => {
    if (!countries) {
      getCountries(REQUEST_URL, data => setCountries(data));
    }
  }, [countries, getCountries, setCountries]);

  const countriesToList = filteredCountries ? filteredCountries : countries;

  return (
    <Layout>
      <CountryFilter />
      {!error && !countries && <LoadingComponent />}
      {error && <ErrorComponent message={error} />}
      {countries && <CountryList countries={countriesToList} />}
    </Layout>
  );
};

export default CountryListing;
