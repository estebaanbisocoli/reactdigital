import React, { Component } from 'react';
var movies = [
  {
  name : "Thor Ragnarok",
  viewed : true,
  url: require('./img/thor.jpg')
  },
  {
  name : "Back to the Future",
  viewed : true,
  url: require('./img/btf.jpg')
  },
  {
  name : "Robocop",
  viewed : false,
  url: require('./img/rc.jpg')
  },
];

let watchedMovies = movies.filter(movie => {
  return movie.viewed === true
})
let renderMovie = watchedMovies.map(movie => {
  return (
    <div className="movie-item">
      <div className="movie-image">
        <img className="image-item" alt="movie.name" src={movie.url}></img>
      </div>
      <div className="movie-text">
        <h4>{movie.name}</h4>
        <p>loreasdasd dasd asd asd asd as das fdsgkjdfgjdfsd a asdassd as dgfghfdkhsdu asdsakjd</p>
      </div>
    </div>
  )
})
class ListItem extends Component {
  render() {
    return (
      <div className="list">
        {renderMovie}
      </div>
    );
  }
}

export default ListItem;