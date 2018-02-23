import React, { Component } from 'react';

import './App.css';
import ListadoDeNotas from './components/ListadoDeNotas'
const notas = [
  {
  titulo: "Pizza casera",
  texto: "300 gr de harina, 160 ml de agua, 5 gr de levadura, 1 cucharadita de sal, 20 gr de aceite, 200 gr de salsa de tomate, 100 gr de mozzarella y orégano."
  },
  {
  titulo: "Comprar en el super",
  texto: "Vino, picadas y servilletas "
  },
  {
  titulo: "Pelis para ver el finde",
  texto: "Coco, Pantera negra, The post, Downsizing"
  }
 ]
class App extends Component {
  render() {
    const estilos = {
      p: {
        textAlign: 'left',
        fontSize: '16px'
      },
        h2: {
          textAlign: 'center',
          textDecoration: 'underline',
          fontSize: '40px'
        }
      }

    return (
      <div className="App">
        <ListadoDeNotas lista={notas} estilo={estilos}/>
      </div>
    );
  }
}

export default App;