import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyContext from '.';
import '../styles/ProductCard.css';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
      setToken(localStorage.getItem('token'));
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/customer/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = token;
      axios.post('http://localhost:3001/loading/session').then((res) => {
        console.log(res);
        setAuth(true);
      }).catch(() => {
        console.log('error');
        localStorage.removeItem('user');
        setUser({});
        setAuth(false);
      });
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('cart') === null || localStorage
      .getItem('cart') === undefined) {
      localStorage.setItem('cart', JSON.stringify({}));
    }
  }, []);

  const qtyProduct = (product, qty) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (qty === 0) {
      delete cart[product.id];
    } else {
      cart[product.id] = qty;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const loginSuccess = (usuario) => {
    setUser(usuario);
    setToken(usuario.token);
    localStorage.setItem('user', JSON.stringify(usuario));
    localStorage.setItem('token', usuario.token);
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
    axios,
    products,
    qtyProduct,
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
