import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getOrderById } from '../utils/axios';
import ProductTable from '../components/ProductTable';

export default function OrderDetail() {
  const [order, setOrder] = useState({});

  useEffect(() => {
    // const { id } = useParams();
    getOrderById(1).then((response) => setOrder(response));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h3>Detalhe do Pedido</h3>
        <span>{order.id}</span>
        <span>{order.dateSale}</span>
        <span>{order.status}</span>
        <button type="button">Marcar como entregue</button>
      </div>
      <ProductTable order={ order } />
    </div>
  );
}
