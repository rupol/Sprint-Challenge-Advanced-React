import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h2 className="name">{props.player.name}</h2>
      <h3 className="country">{props.player.country}</h3>
      <p>Searches: {props.player.searches}</p>
    </div>
  );
};

export default Card;
