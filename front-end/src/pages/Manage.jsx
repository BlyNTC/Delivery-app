import React, { useEffect, useState } from 'react';

function Manage() {
  const [disponivel, setDisponivel] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipo, setTipo] = useState('');

  const validaEmail = () => {
    if (email.includes('@') && email.includes('.com')) {
      return true;
    }
    return false;
  };

  const validator = () => {
    const MAX = 12;
    if (name.length >= MAX && validaEmail() && password.length >= (MAX / 2)) {
      return setDisponivel(true);
    }
    return setDisponivel(false);
  };

  useEffect(() => {
    validator();
  });
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input
          type="name"
          id="name"
          data-testid="admin_manage__input-name"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          data-testid="admin_manage__input-email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          data-testid="admin_manage__input-password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <label htmlFor="tipo">
        Tipo
        <select
          name="tipo"
          id="tipo"
          data-testid="admin_manage__select-role"
          value={ tipo }
          onChange={ (e) => setTipo(e.target.value) }
        >
          <option value="vendedor">vendedor</option>
          <option value="administrator">administrador</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        disabled={ !disponivel }
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Manage;
