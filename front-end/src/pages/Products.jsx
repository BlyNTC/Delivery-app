import React, { useContext } from 'react';
import MyContext from '../context';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function Products() {
  const { products } = useContext(MyContext);

  return (
    <div>
      <Header />
      { products.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
        />
      )) }
    </div>
  );
}

export default Products;
