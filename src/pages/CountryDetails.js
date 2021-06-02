import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import CountryDetail from '../components/CountryDetail';

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const fetchCountry = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${id}`
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setCountry(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchCountry();
  }, [fetchCountry]);

  return (
    <Layout>
      {loading && <p>Loading countries...</p>}
      {error && <p>Something went wrong..</p>}
      {!loading && !error && country && <CountryDetail country={country} />}
    </Layout>
  );
};

export default CountryDetails;
