import React from 'react';
import PropTypes from 'prop-types';

function ProductItem({ prefix, product, index, onClick }) {
  return (
    <tr>
      <td
        data-testid={ `${prefix}element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `${prefix}element-order-table-name-${index}` }
      >
        {product.name}
      </td>
      <td
        data-testid={ `${prefix}element-order-table-quantity-${index}` }
      >
        {product.qty}
      </td>
      <td
        data-testid={ `${prefix}element-order-table-unit-price-${index}` }
      >
        {Number(product.price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `${prefix}element-order-table-sub-total-${index}` }
      >
        {(product.qty * product.price).toFixed(2).replace('.', ',')}
      </td>
      { prefix === 'customer_checkout__'
        && (
          <td>
            <button
              type="button"
              onClick={ () => onClick(product.id) }
              data-testid={ `${prefix}element-order-table-remove-${index}` }
            >
              Remover
            </button>
          </td>
        )}
    </tr>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object,
  index: PropTypes.number,
  onClick: PropTypes.func,
}.isRequired;

export default ProductItem;
