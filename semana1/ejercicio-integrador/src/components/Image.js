import React, { Component } from 'react';
import './Image.css'
class Image extends Component {
  render() {
    return (
      <img src={require('./box.svg')} className="miImagen"></img>
    );
  }
}

export default Image;