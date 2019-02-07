import React, { Component } from 'react';
import FXCountryGrid from './forex/CountryGrid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FXCountryGrid />
      </div>
    );
  }
}

export default App;
