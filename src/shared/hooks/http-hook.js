import { useState, useCallback, useRef, useEffect } from 'react';

const useHttpClient = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const activeHttpRequest = useRef([]);

  const sendRequest = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequest.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();
        if (!response.ok) throw new Error(responseData.message);

        return responseData;
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    },
    []
  );

  const clearError = () => setError(null);

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort()); // never continue with a request that's on its way out if we then switch away from the compoennt that trigered request
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};

export default useHttpClient;