import React, { Component } from 'react';
import './Frutas.css'
function createFruta (fruta) {
  return React.createElement('li', null, fruta)
}
let lista = React.createElement('ul', null, createFruta("Manzana"), createFruta("Pera"), createFruta("Banana"))
let titulo = React.createElement('h4', {className : 'titulo'}, "Lista de Frutas")
let body = React.createElement('div', {className: 'container'}, titulo, lista)
class Frutas extends Component {
  render() {
    return body
    
  }
}

export default Frutas;