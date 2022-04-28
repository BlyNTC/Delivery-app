import React, { useContext } from 'react';
import MyContext from '../context';

function Header() {
  const { user, logout } = useContext(MyContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" data-testid="customer_products__element-navbar-link-products">
              Produtos
            </a>
          </li>
          <li>
            <a
              href="/customer/products"
              data-testid="customer_products__element-navbar-link-orders"
            >
              MEUS PEDIDOS
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href="/" data-testid="customer_products__element-navbar-user-full-name">
              { user.name }
            </a>
          </li>
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
