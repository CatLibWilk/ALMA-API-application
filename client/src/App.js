import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import API from './utils/API';

class App extends Component {

  componentDidMount(){
    API.getItems()
        .then(result => {
          console.log(result || 'no result')
        })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
