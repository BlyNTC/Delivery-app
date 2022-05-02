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
  const [loading, setLoading] = useState(true);

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
      setLoading(true);
      axios.defaults.headers.common.Authorization = token;
      axios.post('http://localhost:3001/loading/session').then(() => {
        setAuth(true);
        setLoading(false);
      }).catch(() => {
        console.log('error');
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
    }
  }, []);

  const qtyProduct = (product, qty) => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex((item) => item.id === product.id);
    const MINUS_ONE = -1;
    if (index === MINUS_ONE) {
      if (qty > 0) {
        cart.push({
          id: product.id,
          price: product.price,
          qty,
        });
      }
    } else {
      cart[index].qty = qty;
    }
    const newCart = cart.filter((item) => item.qty > 0);
    localStorage.setItem('cart', JSON.stringify(newCart));
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
    loading,
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
