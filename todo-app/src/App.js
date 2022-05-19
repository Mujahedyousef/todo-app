import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// import './App.scss';
import StateProvider from "./context/settings";
import React from 'react';

import ToDo from "./components/todo/todo";
import Header from "./components/Header/Header";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StateProvider>
          <ToDo />
        </StateProvider>
      </div>
    );
  }
}



