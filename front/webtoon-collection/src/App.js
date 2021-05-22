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
    );
  }
}

export default App;
