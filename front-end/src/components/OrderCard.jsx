import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard({ saleId, status, date, totalPrice }) {
  return (
    <Link
      to={ `/customer/orders/${saleId}` }
      key={ saleId }
      data-testid={ `customer_products__element-order-date-${saleId}` }
    >
      <span>Pedido</span>
      <span
        data-testid={ `customer_orders__element-order-id-${saleId}` }
      >
        { saleId }
      </span>
      <div
        data-testid={ `customer_orders__element-delivery-status-${saleId}` }
      >
        { status }
      </div>
      <span
        data-testid={ `customer_orders__element-order-date-${saleId}` }
      >
        { date }
      </span>
      <span
        data-testid={ `customer_orders__element-card-price-${saleId}` }
      >
        { totalPrice }
      </span>
    </Link>
  );
}

OrderCard.propTypes = {
  data: PropTypes.any,
  saleId: PropTypes.any,
  status: PropTypes.any,
  totalPrice: PropTypes.any,
}.isRequired;
