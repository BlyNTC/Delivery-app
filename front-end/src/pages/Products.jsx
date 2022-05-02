import React, { useContext } from 'react';
import MyContext from '../context';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function Products() {
  const { products, cartPrice } = useContext(MyContext);

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
      { cartPrice > 0 && (
        <button type="button" className="products__total">
          <spam>Ver Carrinho: R$</spam>
          <spam>{ cartPrice.toFixed(2).replace('.', ',') }</spam>
        </button>
      ) }
    </div>
  );
}

export default Products;
