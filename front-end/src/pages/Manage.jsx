import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Manage() {
  const [disponivel, setDisponivel] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [error, setError] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/admin/register', {
      name,
      email,
      password,
      role,
    }).then().catch(() => {
      setError(true);
    });
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
      <label htmlFor="role">
        Tipo
        <select
          name="role"
          id="role"
          data-testid="admin_manage__select-role"
          value={ role }
          onChange={ (e) => setRole(e.target.value) }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        type="submit"
        data-testid="admin_manage__button-register"
        disabled={ !disponivel }
        onClick={ (e) => handleSubmit(e) }
      >
        Cadastrar
      </button>
      <p
        data-testid="admin_manage__element-invalid-register"
        hidden={ !error }
      >
        Usuário já existe
      </p>
    </form>
  );
}

export default Manage;
