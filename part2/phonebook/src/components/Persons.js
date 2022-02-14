const Persons = ({ namesToShow, deletePerson}) => {
  return (
    <div>
      {namesToShow.map((person) => (
        <div key={person.id}>
          <p>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></p>
        </div>
      ))}
    </div>
  );
}

export default Persons;
