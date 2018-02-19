import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import Image from './components/Image'
import MovieBox from './components/MovieBox'
class App extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="main-titulo">Ejercicio Integrador</h1>
        <div className="separator" >
          <Button texto="Añadir a mi lista"/>
        </div>
        <div className="separator">
          <Image></Image>
        </div>
        <div className="separator">
          <MovieBox></MovieBox> 
        </div>
        
      </div>
    );
  }
}

export default App;
