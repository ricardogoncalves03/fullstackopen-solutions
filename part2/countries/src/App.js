import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useFetch from './useFetch'

const App = () => {
  const [countries, setCountries] = useState([]);
  //const { countires } = useFetch('https://restcountries.com/v2/all');

  useEffect(() => {
    console.log('use effect ran');
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => setCountries(response.data))
  }, []);

  console.log("Countries", countries[0]);
  //console.log(countries)
  const pestans = useFetch('https://restcountries.com/v2/all');
  pestans.map(ya => ya.name)
  return (
    <div>
      <p>OI</p>
      { countries.map(country => <p>{country.name}</p>) }
    </div>
  );
};

export default App;
