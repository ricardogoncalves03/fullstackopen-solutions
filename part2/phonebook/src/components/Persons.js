const Persons = ({ namesToShow }) => {
  return (
    <div>
      {namesToShow.map((person) => (
        <div key={person.id}>
          <p>{person.name}</p>
          <p>{person.number}</p>
        </div>
      ))}
    </div>
  );
}

export default Persons;
