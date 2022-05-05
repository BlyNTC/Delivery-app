import React from 'react';

function Manage() {
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input type="name" id="name" data-testid="admin_manage__input-name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" data-testid="admin_manage__input-email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" data-testid="admin_manage__input-password" />
      </label>
      <label htmlFor="tipo">
        Tipo
        <select name="tipo" id="tipo" data-testid="admin_manage__select-role">
          <option value="vendedor">vendedor</option>
        </select>
      </label>
      <button type="submit" data-testid="admin_manage__button-register">Cadastrar</button>
    </form>
  );
}

export default Manage;
