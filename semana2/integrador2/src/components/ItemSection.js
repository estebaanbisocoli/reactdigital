import React, { Component } from 'react';
const movies = [
  {
  name : "Thor Ragnarok",
  url: require('./img/thor.jpg')
  },
  {
  name : "Back to the Future",
  url: require("./img/btf.jpg")
  },
  {
  name : "Robocop",
  url: require("./img/rc.jpg")
  },
];
const movieList = movies.map(element => {
  return (
  <div className="item" key={element.name}>
    <a href={(()=> {return "#"})()}>
      <img className="image-item" src={element.url} alt={element.name}></img>
    </a>
  </div>)})

class ItemSection extends Component {
  render() {
    return (
      <div className="items">
        {movieList}
      </div>
    );
  }
}
export default ItemSection;