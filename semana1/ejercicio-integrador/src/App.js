import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Image from './components/Image'
import MovieBox from './components/MovieBox'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="boton">
          <Button boton="Añadir a mi lista"></Button>
        </div>
        <div className="imagen">
          <Image></Image>
        </div>
        <div className="box">
          <MovieBox></MovieBox>
        </div>
      </div>
    );
  }
}

export default App;
