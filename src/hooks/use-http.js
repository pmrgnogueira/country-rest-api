import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requesteURL, applyData) => {
    setIsLoading(true);
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

    setIsLoading(false);
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
