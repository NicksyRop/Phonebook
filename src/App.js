import React, { useEffect, useState } from "react";
import axios from "axios";

import phoneService from "./services/phone";

const App = () => {
  const [newName, setNewName] = useState("");

  const [newNumber, setNumber] = useState("");

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    phoneService.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);
  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const obj = {
      name: newName,
      number: newNumber,
    };

    const person = persons.find((person) => person.name === obj.name);

    if (person) {
      if (
        window.confirm(
          `${newName} already exist , do you want to replace old number with new one ?`
        )
      ) {
        const newPhone = { ...person, number: obj.number };

        phoneService.update(person.id, newPhone);
      } else {
      }

      setNewName("");
    } else {
      phoneService.create(obj);

      setNewName("");
      setNumber("");
    }
  };

  const handleClick = (id, name) => {
    if (window.confirm(` Are you sure you want to delete ${name} ?`)) {
      phoneService.destroy(id);
    } else {
    }
  };
  const numbers = persons.map((person) => (
    <ul key={person.id}>
      {person.name} {person.number}{" "}
      <button onClick={() => handleClick(person.id, person.name)}>
        Delete
      </button>
    </ul>
  ));
  return (
    <div>
      <h1 style={{ color: "purple", border: "2px solid purple" }}>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          <label>Name</label> <br />
          <input type="text" value={newName} onChange={handleChange}></input>
        </div>
        <div>
          <label>Number</label> <br />
          <input
            type="number"
            value={newNumber}
            onChange={handleChangeNumber}
          ></input>
        </div>

        <div>
          <button
            style={{
              color: "purple",
              borderRadius: 5,
              fontSize: 20,
              border: "2px solid purple",
            }}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      {numbers}
    </div>
  );
};

export default App;
