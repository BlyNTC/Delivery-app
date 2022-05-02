import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import MyContext from './context';
import './App.css';
import Register from './pages/Register';
import Page from './pages/Page';
import Teste from './pages/Teste';

function App() {
  const { auth } = useContext(MyContext);

  return (
    <Routes>
      {auth ? (
        <>
          <Route path="*" element={ <Navigate to="/customer/products" /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/teste" element={ <Teste /> } />
          <Route path="/login" element={ <Navigate to="/customer/products" /> } />
          <Route path="/register" element={ <Navigate to="/customer/products" /> } />
        </>
      ) : (
        <>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/" element={ <Navigate to="/login" /> } />
          <Route path="/:page" element={ <Page /> } />
        </>
      )}
    </Routes>
  );
}

export default App;
