import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="*" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}

export default App;
