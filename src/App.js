import React, { useEffect, useState } from "react";
import axios from "axios";

import phoneServie from "./services/phone";

const App = () => {
  const [newName, setNewName] = useState("");

  const [newNumber, setNumber] = useState("");

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    phoneServie.getAll().then((res) => {
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

    if (persons.some((person) => person.name === obj.name)) {
      alert(obj.name + " Already exist in phonebook");

      setNewName("");
    } else {
      phoneServie.create(obj);

      setNewName("");
      setNumber("");
    }
  };
  const numbers = persons.map((person) => (
    <ul key={person.name}>
      {person.name} {person.number}{" "}
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
