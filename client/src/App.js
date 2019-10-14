import React from "react";
import "./App.css";
import axios from "axios";

import Nav from "./components/Nav";
import Chart from "./components/Chart";
import PlayerCards from "./components/PlayerCards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      topPlayers: []
    };
  }

  componentDidMount() {
    this.fetchPlayerData();
  }

  fetchPlayerData = () => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          players: res.data,
          topPlayers: res.data.filter(player => player.searches > 10)
        });
      })
      .catch(err => {
        console.log("error:", err);
      });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Chart players={this.state.topPlayers} />
        <PlayerCards players={this.state.players} />
      </div>
    );
  }
}

export default App;
