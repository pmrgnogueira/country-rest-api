import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/Shared/Layout';
import CountryDetail from '../components/CountryDetailView/CountryDetails';
import LoadingComponent from '../components/Shared/LoadingComponent';
import ErrorComponent from '../components/Shared/ErrorComponent';
import useHttp from '../hooks/use-http';

const REQUEST_URL = 'https://restcountries.eu/rest/v2/alpha/';

const CountryDetailView = () => {
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  const { error, getCountries } = useHttp();

  useEffect(() => {
    getCountries(REQUEST_URL + id, data => setCountry(data));
  }, [getCountries, id, setCountry]);

  return (
    <Layout>
      {!error && !country && <LoadingComponent />}
      {error && <ErrorComponent message={error} />}
      {!error && country && <CountryDetail country={country} />}
    </Layout>
  );
};

export default CountryDetailView;
