import { useState, useEffect } from 'react';

export default function useDebounce(func, delay) {
  const [debouncedFunc, setDebouncedFunc] = useState(func);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFunc(func);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]);

  return debouncedFunc;
}
