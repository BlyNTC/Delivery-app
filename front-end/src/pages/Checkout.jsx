import React from 'react';
import Header from '../components/Header';

export default function Checkout() {
  return (
    <div>
      <Header />
      <h3>Finalizar Pedido</h3>
      <div>
        <table>aasjdhjklafhjksahfkjsahgja</table>
        <h2>TOTAL</h2>
      </div>
      <h3>Detalhes e Endereço para entrega</h3>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select name="seller" id="seller">
            <option value="eu-mesmo">Eu mesmo</option>
          </select>
          <label htmlFor="adress">
            Endereço
            <input type="text" name="adress" id="adress" />
          </label>
          <label htmlFor="adress-number">
            Número
            <input type="number" name="adress-number" id="adress-number" />
          </label>
        </label>
        <button type="button">Finalizar Pedido</button>
      </form>
    </div>
  );
}
