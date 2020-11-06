import React, { Component } from "react";
import "./App.css";

// ------- import components --------
import SmurfVillage from '../components/SmurfVillage'

class App extends Component {
  render() {
    return (
      <div className="App">
          <SmurfVillage/>
      </div>
    );
  }
}

export default App;
