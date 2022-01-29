import axios from "axios";
import React, { useEffect, useState } from "react";

const DisplaySearch = (props) => {
  return (
    <div>
      <ul key={props.id}>
        {props.name} {props.phone}
      </ul>
    </div>
  );
};

function FindNumber(props) {
  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    const searches = props.persons.filter((person) =>
      person.name.toLowerCase().includes(search)
    );

    setSearchItems(searches);
  };
  return (
    <div>
      <label>Find phone number </label>
      <br />
      <input type="text" value={search} onChange={handleChange} />
      {searchItems.map((item) => (
        <DisplaySearch name={item.name} phone={item.number} key={item.id} />
      ))}
    </div>
  );
}

export default FindNumber;
