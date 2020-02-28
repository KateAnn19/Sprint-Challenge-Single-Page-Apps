import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard.js";


export default function CharacterList() {
  
  // data is grabbing the response from the request and then we map through it
  const [data, setData] = useState([]);

  // is looking at our input value and filtering what we input
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response);
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("rick and morty characters", response);
      setData(characters);
     });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    // <section className="character-list">
    //   <h2>TODO: `array.map()` over your state here!</h2>
    // </section>
    <div className="characters">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>

      {data.map(data => {
          return (
            <CharacterCard data ={data}/>
          );
        })}
    </div>
  )
}