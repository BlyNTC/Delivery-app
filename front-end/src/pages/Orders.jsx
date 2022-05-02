import React, { useState, useEffect } from 'react';
import axios from 'axios';

import OrderCard from '../components/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const sales = await axios.get('http://localhost:3001/customer/orders');
    // const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    // const salesById = sales.data.filter((res) => res.user_id === getLocalStorage.id);
    setOrders(sales);
  }, []);

  return (
    <div>
      {/* <Headers /> */}
      { orders.map((order, index) => (
        <OrderCard
          saleId={ order.id }
          status={ order.status }
          date={ order.date_sale }
          totalPrice={ order.total_price }
          key={ index }
        />
      )) }
    </div>
  );
}
