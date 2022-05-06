import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Checkout,
  Login,
  OrderDetail,
  Orders,
  Page,
  Products,
  Register,
  SellerOrders,
} from '../pages';
import MyContext from '../context';

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
          {/* TODO: verificar rota para vendedor */}
          <Route path="/seller/orders" element={ <SellerOrders /> } />
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
