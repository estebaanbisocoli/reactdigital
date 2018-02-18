import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alumno from './alumno'


const alumno = new Alumno("Pepe", "Perez")

var imprimirAprobado = (estado) => {
  if (estado === true) {
    return 'Aprobado'
  } else if (estado === false){
    return 'Desaprobado'
  } else {
    return 'Cursando'
  }
}

imprimirAprobado(alumno.getAprobado())
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{alumno.getNombre()} {alumno.getApellido()}</h1>
        </header>
        <p className="App-intro">
          Alumno de {alumno.getCurso()} y {imprimirAprobado(alumno.getAprobado())}
        </p>

      </div>
    );
  }
}

export default App;
