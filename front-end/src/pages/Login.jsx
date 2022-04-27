import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [disable, setDisable] = useState(true);

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
    if (email === '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Login
          <input
            type="text"
            data-testid="common_login__input-email"
            name="email"
            id="email"
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
          type="submit"
          data-testid="common_login__button-login"
          onClick={ handleSubmit }
          disabled={ disable }
        >
          LOGIN
        </button>
      </form>
      <button type="button" data-testid="common_login__button-register">
        REGISTER
      </button>
    </div>
  );
}

export default Login;
