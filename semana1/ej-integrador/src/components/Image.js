import React, { Component } from 'react';
import './Image.css'
class Image extends Component {
  render() {
    return (
        <img className="image" src={require('./box.svg')}></img>
    );
  }
}

export default Image;