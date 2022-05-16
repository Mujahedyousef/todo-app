import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './App.css';

import React from 'react';
import Main from "./components/Main/Main";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Main/>
      </div>
    );
  }
}


