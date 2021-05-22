import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //React-Router import
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </BrowserRouter>
      </div>
      // <div className="App">
        // <h1> 다람쥐 도토리 개많이 쳐먹어!</h1>
        // <p> place holding lorem ipsum shit </p>
      // </div>
    );
  }
}

export default App;
