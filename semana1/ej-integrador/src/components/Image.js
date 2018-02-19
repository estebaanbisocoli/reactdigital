import React, { Component } from 'react';
import './Image.css'
class Image extends Component {
  componentDidMount () {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#DFE6ED'
    ctx.moveTo(0, 0)
    ctx.lineTo(300, 150)

    ctx.moveTo(300, 0)
    ctx.lineTo(-300, 300)
    ctx.stroke()
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" ></canvas>
      </div>
    );
  }
}

export default Image;