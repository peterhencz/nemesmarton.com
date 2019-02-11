import React, { Component } from "react";
import "./App.css";
import image from "./assets/nm.jpg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: "src/assets/nm.jpg",
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <p>NEMES MARTON | soon.</p>
          <img alt="img" src={image} />
        </div>
      </div>
    );
  }
}

export default App;
