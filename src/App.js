import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ToDoContainer} from './to-do-list/ToDoContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          To Do App
        </p> */}
        <ToDoContainer />        
      </header>
    </div>
  );
}

export default App;
