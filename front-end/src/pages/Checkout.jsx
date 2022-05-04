import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import Header from '../components/Header';
import OptionsSallers from '../components/OptionSallers';
import MyContext from '../context';

export default function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [cart, setCart] = useState([]);
  const { cartPrice, qtyProduct } = useContext(MyContext);
  const navigate = useNavigate();

  const onClickRemove = (id) => {
    const oldProduct = cart.find((item) => item.id === id);
    const newCart = cart.filter((product) => product.id !== id);
    console.log('product', oldProduct);
    setCart(newCart);
    qtyProduct(oldProduct, 0);
  };

  useEffect(() => {
    setCart(cart);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartPrice]);

  useEffect(() => {
    axios.get('http://localhost:3001/user?role=seller')
      .then((res) => {
        setSellers(res.data);
      });
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    setCart(cartItem);
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h3>Finalizar Pedido</h3>
        <CheckoutTable products={ cart } onClickRemove={ onClickRemove } />
        <div>
          <spam>TOTAL: R$</spam>
          <spam datatest-id="customer_checkout__element-order-total-price">
            {cartPrice.toFixed(2).replace('.', ',')}
          </spam>
        </div>
      </div>
      <h3>Detalhes e Endereço para entrega</h3>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select name="seller" id="seller">
            { sellers.map((seller) => (
              <OptionsSallers
                saller={ seller.name }
                sallerId={ seller.id }
                key={ seller.id }
              />
            )) }
          </select>
          <label htmlFor="adress">
            Endereço
            <input type="text" name="adress" id="adress" />
          </label>
          <label htmlFor="adress-number">
            Número
            <input
              type="number"
              name="adress-number"
              id="adress-number"
              data-testid="customer_checkout__input-addressNumber"
            />
          </label>
        </label>
        <button
          type="button"
          onClick={ () => navigate('localhost:3000/customer/orders/1') }
          data-test-id="customer_checkout__button-submit-order"
        >
          Finalizar Pedido

        </button>
      </form>
    </div>
  );
}
