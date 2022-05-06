import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function OrderCard({
  saleId,
  status,
  date,
  totalPrice,
  address,
  prefix,
  link,
}) {
  return (
    <Link
      to={ link }
      key={ saleId }
      data-testid={ `${prefix}__element-order-date-${saleId}` }
    >
      <span>Pedido</span>
      <span
        data-testid={ `${prefix}__element-order-id-${saleId}` }
      >
        { saleId }
      </span>
      <div
        data-testid={ `${prefix}__element-delivery-status-${saleId}` }
      >
        { status }
      </div>
      <span
        data-testid={ `${prefix}__element-order-date-${saleId}` }
      >
        { date }
      </span>
      <span
        data-testid={ `${prefix}__element-card-price-${saleId}` }
      >
        { totalPrice }
      </span>
      {address && (
        <span data-testid={ `seller_orders__element-card-address-${saleId}` }>
          {address}
        </span>
      )}
    </Link>
  );
}

OrderCard.propTypes = {
  data: PropTypes.any,
  saleId: PropTypes.any,
  status: PropTypes.any,
  date: PropTypes.any,
  totalPrice: PropTypes.any,
  address: PropTypes.any,
}.isRequired;
