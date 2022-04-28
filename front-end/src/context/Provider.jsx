import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyContext from '.';

function Provider({ children }) {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);

  useEffect(() => {
    if (user.token) {
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
  }, [user]);

  const loginSuccess = (usuario) => {
    setUser(usuario);
    localStorage.setItem('user', JSON.stringify(usuario));
    setAuth(true);
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem('user');
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
