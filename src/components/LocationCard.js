import React from "react";

export default function LocationCard({ data }) {
  return (
  <div className="location">
    <div className="location-list " key={data.id}>
    <h2 className="capital">
      <span aria-label="heart" role="img">
      💗
      </span>
      {data.name}
    </h2>
    <h3 className="capital">Status: {data.type}</h3>
    <h3 className="capital">Species: {data.dimension}</h3>
  </div>
  </div>
    )
}

