import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from './Button'

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
       <Button />
      </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
