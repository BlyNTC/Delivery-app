import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

function CheckoutTable({ products, onClickRemove }) {
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
        <CartItem key={ i } product={ product } index={ i } onClick={ onClickRemove } />
      )) }
    </table>
  );
}

CheckoutTable.propTypes = {
  products: PropTypes.array,
  onClickRemove: PropTypes.func,
}.isRequired;

export default CheckoutTable;
