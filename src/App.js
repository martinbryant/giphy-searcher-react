import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Loading } from './components/loading'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Giphy Searcher</h1>
        </div>
        <div className="search">
          <form className="search-form">
            <input className="search-input" type="text" />
            <input className="search-button" type="submit">Search Giphy</input>
          </form>
        </div>
        <div className="result-display">
          <div className="result-grid">
          </div>
        </div>
        <Loading />
      </div>
    );
  }
}

export default App;
