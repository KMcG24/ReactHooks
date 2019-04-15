import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hook from "../src/components/Hook";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hook />
        </header>
      </div>
    );
  }
}

export default App;
