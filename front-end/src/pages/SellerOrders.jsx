import React, { useState, useEffect } from 'react';
import { getOrders } from '../utils/axios';

import { OrderCard, Header } from '../components';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((data) => {
      const getLocalStorage = JSON.parse(localStorage.getItem('user'));
      const sales = data.filter((res) => res.sellerId === getLocalStorage.id);
      setOrders(sales);
    }).catch(() => setOrders([]));
  }, []);

  return (
    <div>
      <Header />
      { orders.map((order, index) => (
        <OrderCard
          saleId={ order.id }
          status={ order.status }
          date={ order.dateSale }
          totalPrice={ order.totalPrice }
          address={ order.address }
          key={ index }
          link={ `/seller/orders/${order.id}` }
          prefix="seller_orders"
        />
      )) }
    </div>
  );
}
