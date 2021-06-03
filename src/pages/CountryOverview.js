import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import CountryDetail from '../components/CountrOverview/CountryDetails';
import Loading from '../components/Loading';
import ErrorComponent from '../components/ErrorComponent';
import useHttp from '../hooks/use-http';

const REQUEST_URL = 'https://restcountries.eu/rest/v2/alpha/';

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  const { isLoading, error, sendRequest: fetchCountry } = useHttp();

  useEffect(() => {
    fetchCountry(REQUEST_URL + id, data => setCountry(data));
  }, [fetchCountry, id]);

  return (
    <Layout>
      {isLoading && <Loading />}
      {error && <ErrorComponent message={error} />}
      {!isLoading && !error && country && <CountryDetail country={country} />}
    </Layout>
  );
};

export default CountryDetails;
