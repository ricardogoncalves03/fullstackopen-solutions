const Persons = ({ namesToShow }) => {
  return (
    <div>
      {namesToShow.map((person) => (
        <div>
          <p>{person.name}</p>
          <p>{person.number}</p>
        </div>
      ))}
    </div>
  );
}

export default Persons;
