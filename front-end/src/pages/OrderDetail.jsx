import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getOrderById, finishSale, getUserById } from '../utils/axios';
import ProductTable from '../components/ProductTable';

export default function OrderDetail() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [seller, setSeller] = useState('');
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();

  // Ver requisito 26

  useEffect(() => {
    // eslint-disable-next-line
    setLoading(true);
    getOrderById(id).then((response) => {
      setOrder(response);
      getUserById(response.seller_id).then((s) => setSeller(s.name));
      setLoading(false);
    });
  }, []);

  const handleClick = () => {
    finishSale(id);
    setDisabled(true);
  };

  useEffect(() => {
    if (order.status) {
      if (order.status.toLowerCase() === 'entregue') {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [order]);

  return (
    <div>
      <Header />
      <div>
        <h3>Detalhe do Pedido</h3>
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {`Pedido ${order.id}`}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {seller}
        </span>
        <span
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {new Date(order.dateSale).toLocaleDateString('pt-BR')}
        </span>
        <span
          data-testid={ 'customer_order_details__'
          + 'element-order-details-label-delivery-status' }
        >
          { !disabled ? order.status : 'ENTREGUE' }
        </span>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ handleClick }
          disabled={ disabled }
        >
          Marcar como entregue
        </button>
      </div>
      {!loading
      && (
        <ProductTable prefix="customer_order_details__" products={ order.products } />
      )}
      <div>
        <spam>TOTAL: R$</spam>
        <spam data-testid="customer_order_details__element-order-total-price">
          {Number(order.totalPrice).toFixed(2).replace('.', ',')}
        </spam>
      </div>
    </div>
  );
}
