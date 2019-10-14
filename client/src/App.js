import React from "react";
import "./App.css";
import axios from "axios";

import Nav from "./components/Nav";
import PlayerCards from "./components/PlayerCards";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
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
          players: res.data
        });
        console.log(res.data);
      })
      .catch(err => {
        console.log("error:", err);
      });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <PlayerCards players={this.state.players} />
      </div>
    );
  }
}

export default App;
