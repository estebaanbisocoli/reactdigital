import React, { Component } from 'react';
import './MovieBox.css';
import Image from './Image'
import Button from './Button'
class componentName extends Component {
  render() {
    return (
      <div className="container">
        <div className="miImagen">
          <Image></Image>
        </div>
        <div className="content">
          <h4>Titulo</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a leo ut lectus sollicitudin rutrum et. a lectus et lectus tempus eleifend. Etiam nec pellentesque ligula.</p>
          <div className="movie">
            <Button className="movie" boton="borrar"></Button>
          </div>

        </div>
      </div>
    );
  }
}

export default componentName;