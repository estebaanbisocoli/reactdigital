import React, { Component } from 'react';

import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyPokemon from './MyPokemon'
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <div className="pokecaja">
          <MyPokemon />
        </div>
      </MuiThemeProvider>
        
      </div>
    );
  }
}
export default App