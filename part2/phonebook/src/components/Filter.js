const Filter = ({ filterPerson, handleFilterPerson }) => {

  return (
    <p>Filter shown with <input value={filterPerson} 
      onChange={handleFilterPerson} />
    </p>
  );
}

export default Filter;
