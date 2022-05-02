import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Orders from './pages/Orders';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="*" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
