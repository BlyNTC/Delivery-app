import PropTypes from 'prop-types';
import React, { useState } from 'react';

function ProductCard({ product }) {
  const [productQty, setProductQty] = useState(0);

  const addProduct = () => {
    setProductQty(Number(productQty) + 1);
  };

  const removeProduct = () => {
    if (productQty > 0) {
      setProductQty(Number(productQty) - 1);
    }
  };

  return (
    <div className="product-card">
      <div>
        <p data-testid={ `customer_products__element-card-price-${product.id}` }>
          {(product.price).replace('.', ',')}
        </p>
        <img
          src={ product.url_image }
          alt={ product.name }
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          className="product-card__img"
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
            onClick={ removeProduct }
          >
            -
          </button>
          <input
            type="number"
            defaultValue={ 0 }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            className="product-card__input"
            onChange={ (e) => setProductQty(e.target.value) }
            value={ productQty }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ addProduct }
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
