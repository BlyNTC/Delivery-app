import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useContext(MyContext);
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          {user.role === 'customer'
            && (
              <button
                type="button"
                data-testid="customer_products__element-navbar-link-products"
                onClick={ () => navigate('/customer/products') }
                className="header__nav-link selected"
              >
                PRODUTOS
              </button>
            )}
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/customer/orders') }
            className="header__nav-link"
          >
            {user.role === 'customer' ? 'MEUS PEDIDOS' : 'PEDIDOS'}
          </button>
        </ul>
      </nav>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <button
            type="button"
            href="/"
            data-testid="customer_products__element-navbar-user-full-name"
            className="header__nav-link name"
          >
            { user.name }
          </button>
          <button onClick={ logout } type="button" className="header__nav-link logout">
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
