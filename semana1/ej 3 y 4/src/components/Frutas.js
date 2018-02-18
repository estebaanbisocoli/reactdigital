import React, { Component } from 'react';
import './Frutas.css'
let misFrutas = ["Manzana", "Pera", "Banana"]
const list = misFrutas.map((fruta) => (<li>{fruta}</li>))
class Frutas extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="titulo">Lista de Frutas</h4>
        <ul>
        {list}
        </ul>
      </div>
    )
    
  }
}

export default Frutas;