import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '.';
import { getProducts, loadSession } from '../utils/axios';
import '../styles/ProductCard.css';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartPrice, setCartPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
      setToken(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    if (token) {
      setLoading(true);
      loadSession().then(() => {
        setAuth(true);
        setLoading(false);
      }).catch(() => {
        localStorage.removeItem('user');
        setUser({});
        setAuth(false);
        setLoading(false);
      });
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('cart') === null || localStorage
      .getItem('cart') === undefined) {
      localStorage.setItem('cart', JSON.stringify([]));
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const newCartPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      setCartPrice(newCartPrice);
    }
  }, []);

  const qtyProduct = (product, qty) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex((item) => item.id === product.id);
    const MINUS_ONE = -1;
    if (index === MINUS_ONE) {
      if (qty > 0) {
        cart.push({
          name: product.name,
          id: product.id,
          price: product.price,
          qty,
        });
      }
    } else {
      cart[index].qty = qty;
    }
    const newCart = cart.filter((item) => item.qty > 0);
    setCartPrice(newCart.reduce((acc, item) => acc + item.price * item.qty, 0));
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const loginSuccess = (usuario) => {
    setUser(usuario);
    setToken(usuario.token);
    localStorage.setItem('user', JSON.stringify(usuario));
    localStorage.setItem('token', usuario.token);
    if (usuario.role === 'customer') {
      navigate('/customer/products');
    } else {
      navigate('/seller/orders');
    }
    setAuth(true);
  };

  const logout = () => {
    setUser({});
    setToken('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuth(false);
  };

  const contextValue = {
    user,
    loginSuccess,
    auth,
    logout,
    products,
    qtyProduct,
    loading,
    cartPrice,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;
