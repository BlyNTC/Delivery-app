import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Checkout,
  Login,
  CustomerOrderDetail,
  Orders,
  Page,
  Products,
  Register,
  SellerOrders,
  SellerOrderDetail,
  Manage,
} from '../pages';
import MyContext from '../context';

function Rotas() {
  const { auth } = useContext(MyContext);
  return (
    <Routes>
      {auth ? (
        <>
          <Route path="/admin/manage" element={ <Manage /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrderDetail /> } />
          <Route path="/customer/orders" element={ <Orders /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          {/* TODO: verificar rota para vendedor */}
          <Route path="/seller/orders/:id" element={ <SellerOrderDetail /> } />
          <Route path="/seller/orders" element={ <SellerOrders /> } />
          <Route path="/login" element={ <Navigate to="/customer/products" /> } />
          <Route path="/register" element={ <Navigate to="/customer/products" /> } />
          {/* <Route path="*" element={ <Navigate to="/customer/products" /> } /> */}
        </>
      ) : (
        <>
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/" element={ <Navigate to="/login" /> } />
          <Route path="*" element={ <Page /> } />
        </>
      )}
    </Routes>
  );
}

export default Rotas;
