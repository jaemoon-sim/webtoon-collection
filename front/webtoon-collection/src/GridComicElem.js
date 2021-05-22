import React, { Component } from 'react';

class GridComicElem extends Component {
  constructor(props) {
    super(props)
    this.state = props.comic
  }

  render() {
    return (
      <div className="grid_elem">
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
export default GridComicElem;
