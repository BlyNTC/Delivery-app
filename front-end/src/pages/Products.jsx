import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';

import { Header, ProductCard } from '../components';

function Products() {
  const { products, cartPrice } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="products">
        { products.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        )) }
      </div>
      <button
        type="button"
        className="products__total"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ cartPrice === 0 }
      >
        <span>Ver Carrinho: R$</span>
        <span data-testid="customer_products__checkout-bottom-value">
          { cartPrice.toFixed(2).replace('.', ',') }
        </span>
      </button>
    </div>
  );
}

export default Products;
