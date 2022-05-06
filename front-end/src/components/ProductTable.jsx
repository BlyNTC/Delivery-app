import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

function ProductTable({ prefix, products, onClickRemove }) {
  return (
    <table>
      <thead>
        <td>Item</td>
        <td>Descrição</td>
        <td>Quantidade</td>
        <td>Valor Unitário</td>
        <td>Subtotal</td>
        <td>Remover Item</td>
      </thead>
      { products.map((product, i) => (
        <ProductItem
          key={ i }
          product={ product }
          index={ i }
          onClick={ onClickRemove }
          prefix={ prefix }
        />
      )) }
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.array,
  onClickRemove: PropTypes.func,
}.isRequired;

export default ProductTable;
