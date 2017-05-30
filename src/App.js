import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Header from "./Components/header/header.js";
import Content from "./Components/content.js";

import "./CSS/style-home.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
