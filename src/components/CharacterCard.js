import React from "react";

export default function CharacterCard({ data }) {
  return (
    <div className="character">
      <div className="character-list " key={data.id}>
        <h2 className="capital">
          <span aria-label="stars-moon" role="img">
            ✨
          </span>
          {data.name}
        </h2>
        <h3 className="capital">Status: {data.status}</h3>
        <h3 className="capital">Species: {data.species}</h3>
        <h3 className="capital">Gender: {data.gender}</h3>
      </div>
    </div>
  );
}

//set up another axios call
//set up more
