/* stateless componentes
* componentes funcionales solo jsx y las props
*/
import React from 'react'
const stateless = (props) =>{
  return (<div>
            <button></button>
        </div>)
}
/*  Los componentes stateful permite mantener datos propios a lo largo del tiempo
  * esto se llama state, solo el componente pude cambiar el state
*/
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props) //necesario si se llama al constructor
    this.state = {
      count:1 // se puede setear default con props no se usa el props
    }
  }
  render() {
    return <h1>{this.state.count}</h1>
  }
}

export default Counter;

/* setState(objeto o callback) */