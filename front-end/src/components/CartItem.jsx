import React from 'react';
import PropTypes from 'prop-types';

function CartItem({ product, index, onClick }) {
  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        //              customer_checkout__element-order-table-name-
      >
        {product.name}

      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
      >
        {product.qty}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
      >
        {Number(product.price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
      >
        {(product.qty * product.price).toFixed(2).replace('.', ',')}
      </td>
      <td>
        <button
          type="button"
          onClick={ () => onClick(product.id) }
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
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
