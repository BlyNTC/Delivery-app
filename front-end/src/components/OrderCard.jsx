import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard({ saleId, status, data, totalPrice }) {
  return (
    <Link
      to={ `/customer/orders/s${saleId}` }
      key={ saleId }
      data-testid={ `customer_products__element-order-date-${saleId}` }
    >
      <span>Pedido</span>
      <span>{ saleId }</span>
      <div>{ status }</div>
      <span>{ data }</span>
      <span>{ totalPrice }</span>
    </Link>
  );
}

OrderCard.propTypes = {
  data: PropTypes.any,
  saleId: PropTypes.any,
  status: PropTypes.any,
  totalPrice: PropTypes.any,
}.isRequired;
