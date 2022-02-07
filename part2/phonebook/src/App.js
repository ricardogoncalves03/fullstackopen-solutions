import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterPerson, setNewFilterPerson] = useState('');

  const namesToShow = filterPerson
  ? persons.filter(person => person.name.toLowerCase().includes(filterPerson))
  : persons;

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

  const existingNames = persons.map(person => person.name);
  if (existingNames.includes(newName)) {
    window.alert(`${newName} is already added to phonebook`);
  } else {
    setPersons(persons.concat(personObject));
  }
  setNewName(''); // resets the value of the controlled input element
  setNewNumber('');
  }

  const handleAddName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleAddNumber = event => {
    setNewNumber(event.target.value);
  }

  const handleFilterPerson = event => {
    setNewFilterPerson(event.target.value);
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filterPerson={filterPerson} handleFilterPerson={handleFilterPerson} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleAddName={handleAddName}
        newNumber={newNumber}
        handleAddNumber={handleAddNumber}
      />
      <h2>Numbers</h2>
        <Persons namesToShow={namesToShow}/>
      </div>
  );
}

export default App;
