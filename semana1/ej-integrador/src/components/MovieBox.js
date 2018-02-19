import React, { Component } from 'react';
import './MovieBox.css'
import Image from './Image'
import Button from './Button'
class MovieBox extends Component {
  render() {
    return (
      <div className="moviebox-container">
        <div className="imagen">
          <Image></Image>
        </div>
        <div className="texto">
          <h2 className="subtitulo">Titulo</h2>
          <span className="parrafo">Ppurus, eget semperoremLorem ipsum dolorempus purus, eget semper oremLorem ipsum dolorempus purus, eget semper ligula semper sed. Fusce feugiat nunc pretium velit porttitor pellentesque. Praesent id ipsum metus. Ut vitae  </span>
        </div>
        <div className="btn">
          <Button texto="Borrar" />
        </div>
      </div>
    );
  }
}

export default MovieBox;