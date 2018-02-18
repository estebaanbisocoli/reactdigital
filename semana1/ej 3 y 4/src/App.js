import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Frutas from './components/Frutas'
class App extends Component {
  render() {
    return (
      <div>
        <Componente></Componente>
        <Frutas></Frutas>
      </div>
    );
  }
}

export default App;
