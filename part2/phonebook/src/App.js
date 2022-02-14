import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterPerson, setNewFilterPerson] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => 
        setPersons(initialPersons))
  }, []);

  const namesToShow = filterPerson
  ? persons.filter(person => person.name.toLowerCase().includes(filterPerson))
  : persons;

  const addPerson = event => {
    event.preventDefault();

    const existingNames = persons.map(person => person.name);

    if (existingNames.includes(newName)) {
      const id = persons.find(p => p.name === newName).id;
      const changedPerson = { ...persons, number: newNumber };
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      personService
        .update(changedPerson.id, changedPerson)
        .then(returnedPerson => {
          console.log(`${changedPerson} successfully updated`)
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        })
    } else {
        const personObject = {
          name: newName,
          number: newNumber
        };
        personService
          .create(personObject)
          .then(newPerson => {
            setPersons(persons.concat(newPerson))
            setNewName(''); // resets the value of the controlled input element
            setNewNumber('');
          })}

      console.log('xd', persons[-1]);
    }
    console.log('xd', persons[persons.length - 1]);

  const handleAddName = (event) => {
    setNewName(event.target.value);
  }

  const handleAddNumber = event => {
    setNewNumber(event.target.value);
  }

  const handleFilterPerson = event => {
    setNewFilterPerson(event.target.value);
  }

  const DeletePerson = id => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteObject(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={filterPerson} onChange={handleFilterPerson} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleAddName={handleAddName}
        newNumber={newNumber}
        handleAddNumber={handleAddNumber}
      />
      <h2>Numbers</h2>
      <Persons namesToShow={namesToShow} deletePerson={DeletePerson} />
    </div>
  );
}

export default App;
