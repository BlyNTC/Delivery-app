import React, { useContext } from 'react';
import MyContext from '../context';

function Header() {
  const { user, logout } = useContext(MyContext);
  return (
    <header>
      <nav>
        <ul>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </button>
        </ul>
      </nav>
      <nav>
        <ul>
          <button
            type="button"
            href="/"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { user.name }
          </button>
          <button onClick={ logout } type="button">
            <a href="/" data-testid="customer_products__element-navbar-link-logout">
              Sair
            </a>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
