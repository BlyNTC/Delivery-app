import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutTable from '../components/CheckoutTable';
import Header from '../components/Header';
import OptionsSellers from '../components/OptionSellers';
import MyContext from '../context';
import { CheckoutValidate } from '../utils/checkoutValidate';
import { postOrder, getUserSeller } from '../utils/axios';

export default function Checkout() {
  const [sellers, setSellers] = useState([]);
  const [cart, setCart] = useState([]);
  const [formCheckout, setFormCheckout] = useState({
    sellerId: '',
    address: '',
    deliveryNumber: '',
  });
  const { cartPrice, qtyProduct } = useContext(MyContext);
  const navigate = useNavigate();

  const onClickRemove = (id) => {
    const oldProduct = cart.find((item) => item.id === id);
    const newCart = cart.filter((product) => product.id !== id);
    console.log('product', oldProduct);
    setCart(newCart);
    qtyProduct(oldProduct, 0);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormCheckout({ ...formCheckout, [name]: value });
  };

  const onClickCheckout = () => {
    const getLocalStorage = JSON.parse(localStorage.getItem('user'));
    const checkoutBody = {
      sale: {
        userId: getLocalStorage.id,
        sellerId: formCheckout.sellerId,
        totalPrice: cartPrice,
        deliveryAddress: formCheckout.address,
        deliveryNumber: formCheckout.deliveryNumber,
        status: 'Pendente',
      },
      saleProducts: cart,
    };
    if (!CheckoutValidate(checkoutBody)) {
      postOrder(checkoutBody)
        .then(() => navigate(`/customer/orders/${getLocalStorage.id}`));
    }
  };

  useEffect(() => {
    setCart(cart);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartPrice]);

  useEffect(() => {
    getUserSeller().then((data) => {
      setSellers(data);
      setFormCheckout({ ...formCheckout, sellerId: data[0].id });
    });
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    setCart(cartItem);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h3>Finalizar Pedido</h3>
        <CheckoutTable products={ cart } onClickRemove={ onClickRemove } />
        <div>
          <spam>TOTAL: R$</spam>
          <spam data-testid="customer_checkout__element-order-total-price">
            {cartPrice.toFixed(2).replace('.', ',')}
          </spam>
        </div>
      </div>
      <h3>Detalhes e Endereço para entrega</h3>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            name="sellerId"
            id="seller"
            onChange={ onChange }
            data-testid="customer_checkout__select-seller"
          >
            { sellers.map((seller) => (
              <OptionsSellers
                seller={ seller.name }
                sellerId={ seller.id }
                key={ seller.id }
                onChange={ onChange }
              />
            )) }
          </select>
          <label htmlFor="deliveryAddress">
            Endereço
            <input
              type="text"
              name="address"
              id="address"
              data-testid="customer_checkout__input-address"
              onChange={ onChange }
            />
          </label>
          <label htmlFor="address-number">
            Número
            <input
              type="number"
              name="deliveryNumber"
              id="address-number"
              data-testid="customer_checkout__input-addressNumber"
              onChange={ onChange }
            />
          </label>
        </label>
        <button
          type="button"
          onClick={ onClickCheckout }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido

        </button>
      </form>
    </div>
  );
}
