import React, { Component } from 'react';
import './App.css';
import TheMovieDb from './API/index'
class App extends Component {
  api = new TheMovieDb()
  render() {
    const api = new TheMovieDb()
    api.getPopularMovies().then(response => {
      console.log(response.data)
    })
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
