import {render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import productMock from './productMock';

import '@testing-library/jest-dom'
import App from '../App'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Product', () => {
  it('should render product page', async () => {
    renderWithRouter(<App />, { route: '/login' })
    expect(screen.getByText('Login')).toBeInTheDocument();
    const inputEmail = screen.getByTestId('common_login__input-email');
    fireEvent.change(inputEmail, { target: { value: 'zebirita@email.com' } })

    const inputPassword = screen.getByTestId('common_login__input-password');
    fireEvent.change(inputPassword, { target: { value: '$#zebirita#$' } });

    const buttonLogin = screen.getByTestId('common_login__button-login');
    fireEvent.click(buttonLogin);
    await waitFor(() => {
      expect(screen.getByText('Produtos')).toBeInTheDocument();
      expect(screen.getByText('MEUS PEDIDOS')).toBeInTheDocument();
      expect(screen.getByText('Cliente Zé Birita')).toBeInTheDocument();
      expect(screen.getByText('Sair')).toBeInTheDocument();
    }, { timeout: 2000 })
    const cartButton = screen.getByTestId('customer_products__button-cart');
    expect(cartButton).toBeInTheDocument();
    expect(cartButton).toHaveAttribute('disabled');

    const cartPrice = screen.getByTestId('customer_products__checkout-bottom-value');
    expect(cartPrice).toBeInTheDocument();
    expect(cartPrice).toHaveTextContent('0,00');

    productMock.forEach(product => {
      const productPrice = screen.getByTestId(`customer_products__element-card-price-${product.id}`);
      expect(productPrice).toBeInTheDocument();
      expect(productPrice).toHaveTextContent((product.price).replace('.', ','));

      const productName = screen.getByTestId(`customer_products__element-card-title-${product.id}`);
      expect(productName).toBeInTheDocument();
      expect(productName).toHaveTextContent(product.name);

      const removeButton = screen.getByTestId(`customer_products__button-card-rm-item-${product.id}`);
      expect(removeButton).toBeInTheDocument();
      expect(removeButton).not.toHaveAttribute('disabled');

      const addButton = screen.getByTestId(`customer_products__button-card-add-item-${product.id}`);
      expect(addButton).toBeInTheDocument();
      expect(addButton).not.toHaveAttribute('disabled');

      const inputValue = screen.getByTestId(`customer_products__input-card-quantity-${product.id}`);
      expect(inputValue).toBeInTheDocument();
      expect(inputValue).toHaveAttribute('value', '0');

      fireEvent.click(addButton);
      expect(inputValue).toHaveAttribute('value', '1');

      fireEvent.click(removeButton);
      expect(inputValue).toHaveAttribute('value', '0');
    });
    const addButton1 = screen.getByTestId('customer_products__button-card-add-item-1');
    expect(addButton1).toBeInTheDocument();
    expect(addButton1).not.toHaveAttribute('disabled');
    fireEvent.click(addButton1);
    expect(cartPrice).toHaveTextContent('2,20');
  });
});