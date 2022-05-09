import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getOrderById, updateStatusSale } from '../utils/axios';
import ProductTable from '../components/ProductTable';

export default function OrderDetail() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [disabledOrder, setDisabledOrder] = useState(false);
  const [disabledDelivery, setDisabledDelivery] = useState(true);
  const [status, setStatus] = useState('');
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOrderById(id).then((response) => {
      setOrder(response);
      setStatus(response.status);
      if (response.status.toLowerCase() === 'pendente') {
        setDisabledOrder(false);
        setDisabledDelivery(true);
      } else if (response.status.toLowerCase() === 'preparando') {
        setDisabledOrder(true);
        setDisabledDelivery(false);
      } else {
        setDisabledOrder(true);
        setDisabledDelivery(true);
      }
      setLoading(false);
    });
  }, []);

  const handleClickOrder = () => {
    if (status.toLowerCase() === 'pendente') {
      updateStatusSale(order.id, 'Preparando');
      setDisabledOrder(true);
      setDisabledDelivery(false);
      setStatus('Preparando');
    }
  };

  const handleClickDelivery = () => {
    if (status.toLowerCase() === 'preparando') {
      updateStatusSale(order.id, 'Em Trânsito');
      setDisabledDelivery(true);
      setStatus('Em Trânsito');
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h3>Detalhe do Pedido</h3>
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {`Pedido ${order.id}`}
        </span>
        <span
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {new Date(order.dateSale).toLocaleDateString('pt-BR')}
        </span>
        <span
          data-testid={ 'seller_order_details__'
          + 'element-order-details-label-delivery-status' }
        >
          { status }
        </span>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ handleClickOrder }
          disabled={ disabledOrder }
        >
          Preparar pedido
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ handleClickDelivery }
          disabled={ disabledDelivery }
        >
          Saiu para entrega
        </button>
      </div>
      {!loading
      && (
        <ProductTable prefix="seller_order_details__" products={ order.products } />
      )}
      <div>
        <spam>TOTAL: R$</spam>
        <spam data-testid="seller_order_details__element-order-total-price">
          {Number(order.totalPrice).toFixed(2).replace('.', ',')}
        </spam>
      </div>
    </div>
  );
}
