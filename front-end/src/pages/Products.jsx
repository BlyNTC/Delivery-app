import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

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
        <spam>Ver Carrinho: R$</spam>
        <spam data-testid="customer_products__checkout-bottom-value">
          { cartPrice.toFixed(2).replace('.', ',') }
        </spam>
      </button>
    </div>
  );
}

export default Products;
