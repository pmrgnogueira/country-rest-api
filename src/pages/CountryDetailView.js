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
  const { isLoading, error, sendRequest: fetchCountry } = useHttp();

  useEffect(() => {
    fetchCountry(REQUEST_URL + id, data => setCountry(data));
  }, [fetchCountry, id]);

  return (
    <Layout>
      {isLoading && <LoadingComponent />}
      {error && <ErrorComponent message={error} />}
      {!isLoading && !error && country && <CountryDetail country={country} />}
    </Layout>
  );
};

export default CountryDetailView;
