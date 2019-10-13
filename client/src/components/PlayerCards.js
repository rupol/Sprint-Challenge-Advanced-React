import React from "react";
import Card from "./Card";

class PlayerCards extends React.Component {
  render() {
    return (
      <div className="cards">
        {this.props.players.map(player => (
          <Card key={player.id} player={player} />
        ))}
      </div>
    );
  }
}

export default PlayerCards;
