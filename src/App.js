import React from 'react';
import './App.css';
import Home from './components/Home';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Form from './components/Form';
import Chart from './components/Chart';

function App() {
 
  return (
    <div className="App">
      <Routes>
         <Route path="/"element={<Home/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="dashboard" element={<Dashboard/>}/>
         <Route path="form" element={<Form/>}/>
         <Route path="report" element={<Chart/>}/>
         {/* <Route path='*' element={<Navigate to="/"/>}/> */}
      </Routes>
   
    </div>
  );
}

export default App;
