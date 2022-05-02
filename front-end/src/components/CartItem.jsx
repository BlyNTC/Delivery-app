import React from 'react';
import PropTypes from 'prop-types';

function CartItem({ product, index, onClick }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td
        data-test-id={ `customer_checkout__element-order-table-name-${index}` }
      >
        {product.name}

      </td>
      <td
        data-test-id={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.qty}
      </td>
      <td
        data-test-id={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {Number(product.price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-test-id={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {(product.qty * product.price).toFixed(2).replace('.', ',')}
      </td>
      <td>
        <button
          type="button"
          onClick={ () => onClick(product.id) }
          data-test-id={ `customer_checkout__element-order-table-remove-${index}` }
        >
          Remover

        </button>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  onClick: PropTypes.func,
}.isRequired;

export default CartItem;
