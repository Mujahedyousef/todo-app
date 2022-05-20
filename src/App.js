
import './App.scss';

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



