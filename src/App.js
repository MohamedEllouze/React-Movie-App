import React, { Component } from 'react';
import './App.css';
import Movies from './Movies'



class App extends Component {
  constructor(props){
    super(props)

  }
  
  render() {
    return (
      <div className="App">
      
      <Movies
      
      />
        
      </div>
    );
  }
}

export default App;
