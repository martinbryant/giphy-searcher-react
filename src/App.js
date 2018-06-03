import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Loading } from './components/loading'
import { ResultDisplay } from './components/result-display'
import { SearchForm } from './components/search-form';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Giphy Searcher</h1>
        </div>
        <SearchForm />
        <ResultDisplay />
        <Loading />
      </div>
    );
  }
}

export default App;
