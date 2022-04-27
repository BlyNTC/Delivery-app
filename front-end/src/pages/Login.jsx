import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

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
