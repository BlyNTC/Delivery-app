import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
