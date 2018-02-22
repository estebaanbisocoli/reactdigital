import React, { Component } from 'react';
import ItemSection from './components/ItemSection'
import ListItem from './components/ListItem'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
       <div className="titulo">
          <h1>Peliculas</h1>
         <h4>Haga click para marcar como vista</h4>
       </div>
       <div className="item-row">
         <ItemSection />
        </div>
        <div className="list-row">
          <ListItem />
        </div>
      </div>

    );
  }
}

export default App;
