import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../context';
import '../styles/Global.css';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const { loginSuccess } = useContext(MyContext);

  function validateEmail(inputEmail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
  }

  useEffect(() => {
    const PASSWORD_LENGTH = 6;
    if (password.length >= PASSWORD_LENGTH && validateEmail(email)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    axios.post('http://localhost:3001/login', {
      email,
      password,
    }).then((res) => {
      loginSuccess(res.data);
      navigate('/customer/products');
    }).catch(() => {
      setEmailError(true);
    });
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <label htmlFor="email">
          Login
          <input
            type="text"
            data-testid="common_login__input-email"
            name="email"
            id="email"
            placeholder="email@trybeer.com.br"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_login__input-password"
            name="password"
            id="password"
            placeholder="********"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        { emailError
          && (
            <p data-testid="common_login__element-invalid-email">
              Email ou senha inválidos
            </p>
          )}
        <button
          className="login-button"
          type="submit"
          data-testid="common_login__button-login"
          onClick={ handleSubmit }
          disabled={ disable }
        >
          LOGIN
        </button>
        <button
          className="login-button"
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Login;
