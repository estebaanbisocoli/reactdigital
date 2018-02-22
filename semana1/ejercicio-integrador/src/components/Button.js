import React, { Component } from 'react';
import './Button.css'
class Button extends Component {
  render() {
    return (
      <div>
        <button className="btn" href="#">{this.props.boton}</button>
      </div>
    );
  }
}

export default Button;