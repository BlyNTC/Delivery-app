import PropTypes from 'prop-types';
import React from 'react';

function ProductCard({ product }) {
  return (
    <div>
      <div>
        <p data-testid={ `customer_products__element-card-price-${product.id}` }>
          {(product.price).replace('.', ',')}
        </p>
        <img
          src={ product.url_image }
          alt={ product.name }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </div>
      <div>
        <p data-testid={ `customer_products__element-card-title-${product.id}` }>
          {product.name}
        </p>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            type="number"
            defaultValue={ 0 }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.any,
}.isRequired;

export default ProductCard;
