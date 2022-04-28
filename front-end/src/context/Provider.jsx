import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyContext from '.';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = user.token;
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
