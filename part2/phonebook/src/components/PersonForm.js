const PersonForm = ({ addPerson, newName, 
  handleAddName, newNumber, handleAddNumber }) => {

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleAddName} />
        </div>
        <div>
          number:{' '}
          <input type="number" value={newNumber} onChange={handleAddNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
