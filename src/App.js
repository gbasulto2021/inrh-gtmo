import React from 'react';
import './App.css';
import Home from './components/Home';
import {Outlet} from 'react-router-dom'


function App() {
 
  return (
    <div className="App">
      <Home/>
      <Outlet/>
   
    </div>
  );
}

export default App;
