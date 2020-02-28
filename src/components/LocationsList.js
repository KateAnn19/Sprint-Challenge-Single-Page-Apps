import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";



export default function LocationsList() {
  // data is grabbing the response from the request and then we map through it
  const [location, setLocations] = useState([]);
  // is looking at our input value and filtering what we input
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/")
    .then(response => {
      console.log(response);
      const locations = response.data.results.filter(location =>
        location.name.toLowerCase().includes(query.toLowerCase())
      );
      console.log("rick and morty locations", response);
      setLocations(locations);
     });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    // <section className="character-list">
    //   <h2>TODO: `array.map()` over your state here!</h2>
    // </section>
    <div className="locations">
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
      <div className="locations">
        {location.map(data => {
          return (
            <LocationCard data={data}/>
          );
        })}
      </div>   
    </div>
  )
}

