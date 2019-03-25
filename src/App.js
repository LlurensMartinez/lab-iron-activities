import React, { Component } from 'react';
import Activities from './components/Activities'
import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Activities />
      </div>
    );
  }
}

export default App;
