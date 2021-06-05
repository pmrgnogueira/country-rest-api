import { useState, useCallback } from 'react';

const useHttp = () => {
  const [error, setError] = useState(null);

  const getCountries = useCallback(async (requesteURL, applyData) => {
    setError(null);

    try {
      const response = await fetch(requesteURL);

      if (!response.ok) {
        throw new Error('Request Failed');
      }

      const data = await response.json();
      applyData(data);
    } catch (error) {
      setError(error.message || 'Something went wrong');
    }
  }, []);

  return { error, getCountries };
};

export default useHttp;
