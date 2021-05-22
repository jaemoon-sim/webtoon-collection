import React, { Component } from 'react';
import GridComicElem from './GridComicElem.js'
import data from './data/favorite_unread.js'
import "./App.css"

const grid = data.favorites.map((item, i)=>{
  return (
    <GridComicElem comic={item}/>
  )
})

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        {
          grid
        }
      </div>
    );
  }
}

export default Home;
