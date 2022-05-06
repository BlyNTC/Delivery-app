import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/Products';
import MyContext from '../context';
import Register from '../pages/Register';
import Page from '../pages/Page';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';

function Rotas() {
  const { auth } = useContext(MyContext);
  return (
    <Routes>
      {auth ? (
        <>
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/orders/:id" element={ <OrderDetail /> } />
          <Route path="/customer/orders" element={ <Orders /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/login" element={ <Navigate to="/customer/products" /> } />
          <Route path="/register" element={ <Navigate to="/customer/products" /> } />
          <Route path="*" element={ <Navigate to="/customer/products" /> } />
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

export default Rotas;