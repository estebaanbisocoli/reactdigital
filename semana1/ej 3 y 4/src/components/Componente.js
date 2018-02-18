import React, { Component } from 'react';
let miPrimer = React.createElement('div', {className: 'App'}, null,
                                    React.createElement('h1', {className: 'App-title'}, 'Mi Primer Componente'),
                                    React.createElement('p', {className: 'App-intro'}, 'Practicando componentes sin jsx'))
class Componente extends Component {
  render() {
    return miPrimer
  }
}

export default Componente;