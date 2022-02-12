import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState('');

  useEffect(() => {
    console.log('use effect ran');
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => setCountries(response.data))
  }, []);

  const handleFilterCountry = (event) => {
    setFilterCountries(event.target.value);
  };

  const countriesToShow = filterCountries 
    ? countries.filter(country => country.name.toLowerCase().includes(filterCountries))
    : countries;

  if (countriesToShow.length >= 10) {
    return (
      <div>
        <Filter value={filterCountries} onChange={handleFilterCountry} />
        <br></br>
        Too many matches
      </div>
    );
  } else if (countriesToShow.length === 1) {
    return (
      <div>
        <Filter value={filterCountries} onChange={handleFilterCountry} />
        <br></br>
        <h1>{countriesToShow.map(country => country.name)}</h1>
        <p>capital - {countriesToShow.map(country => country.capital)}</p>
        <p>area - {countriesToShow.map(country => country.area)}</p>
        <h2>languages</h2>
        <ul>
          <li>{countriesToShow.map(country => country.languages.map(
            language => <li key={language.name}>{language.name}</li>))}</li>
        </ul>
        <img src={countriesToShow.map(country => country.flag)} alt="Country flag"></img>
      </div>
    );
  } else {
      return (
        <div>
          <Filter value={filterCountries} onChange={handleFilterCountry} />
          <div>
            {
                countriesToShow.map(country => (
                  <p key={country.name}>
                    {country.name} <button>show</button>
                  </p>
                ))
            }
          </div>
        </div>
      );
  } 
};

export default App;
