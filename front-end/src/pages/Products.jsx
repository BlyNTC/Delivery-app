import React, { useState, useEffect, useContext } from 'react';
import MyContext from '../context';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const { axios } = useContext(MyContext);

  useEffect(() => {
    axios.get('http://localhost:3001/customer/products').then((res) => {
      setProducts(res.data);
    });
  }, [axios]);

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
