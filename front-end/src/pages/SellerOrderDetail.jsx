import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { getOrderById, finishSale } from '../utils/axios';
import ProductTable from '../components/ProductTable';

export default function OrderDetail() {
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const [disabledOrder, setDisabledOrder] = useState(false);
  const [disabledDelivery, setDisabledDelivery] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getOrderById(id).then((response) => {
      setOrder(response);
      setLoading(false);
    });
  }, []);

  const handleClick = () => {
    finishSale(id);
    setDisabled(true);
    setDisabledDelivery(true);
    setDisabledOrder(true);
  };

  useEffect(() => {
    if (order.status) {
      if (order.status.toLowerCase() === 'entregue') {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [setDisabled]);

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
          { disabled ? order.status : 'ENTREGUE' }
        </span>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          onClick={ handleClick }
          disabled={ disabledOrder }
        >
          Preparar pedido
        </button>
        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          onClick={ handleClick }
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
