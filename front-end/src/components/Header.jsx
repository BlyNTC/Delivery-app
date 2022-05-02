import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(MyContext);
  return (
    <header>
      <nav>
        <ul>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => navigate('/customer/products') }
          >
            PRODUTOS
          </button>
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/customer/checkout') }

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
