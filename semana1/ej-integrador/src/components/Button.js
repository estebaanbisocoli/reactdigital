import React, { Component } from 'react';
import './Button.css'
class Button extends Component {
  render() {
    return (
      <div>
        <a className="button">{this.props.texto}</a>
      </div>
    );
  }
}

export default Button;