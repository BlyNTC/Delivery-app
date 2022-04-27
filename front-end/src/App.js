import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Registro';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Register /> } />
    </Routes>
  );
}

export default App;
