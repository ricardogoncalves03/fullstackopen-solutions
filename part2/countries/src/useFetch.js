import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data) => {
        console.log('FETCH', data);
        return setData(data);
      });
  }, []);
};

export default useFetch;
