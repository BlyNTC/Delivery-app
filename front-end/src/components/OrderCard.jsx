import PropTypes from 'prop-types';
import React from 'react';

export default function OrderCard({ saleId, status, data, totalPrice }) {
  return (
    <div
      key={ saleId }
      data-testid={ `customer_products__element-order-date-${ saleId }` }>
      <span>Pedido</span>
      <span>{ saleId }</span>
      <div>{ status }</div>
      <span>{ data }</span>
      <span>{ totalPrice }</span>
    </div>
  );
}

OrderCard.propTypes = {
  data: PropTypes.any,
  saleId: PropTypes.any,
  status: PropTypes.any,
  totalPrice: PropTypes.any,
}.isRequired;
