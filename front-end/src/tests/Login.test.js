import {render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import React from 'react'

import '@testing-library/jest-dom'
import App from '../App'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Login', () => {
  it('should render login page', async () => {
    renderWithRouter(<App />, { route: '/login' });
    expect(screen.getByText('Login')).toBeInTheDocument();

    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');

    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');

    const buttonLogin = screen.getByTestId('common_login__button-login');
    expect(buttonLogin).toBeInTheDocument();
    expect(buttonLogin).toHaveTextContent('LOGIN');

    const buttonRegister = screen.getByTestId('common_login__button-register');
    expect(buttonRegister).toBeInTheDocument();
    expect(buttonRegister).toHaveTextContent('REGISTER');
  });
  it('should login', async () => {
    renderWithRouter(<App />, { route: '/login' });
    expect(screen.getByText('Login')).toBeInTheDocument();

    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'zebirita@email.com' } })
    expect(inputEmail).toHaveValue('zebirita@email.com');

    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');
    fireEvent.change(inputPassword, { target: { value: '$#zebirita#$' } });
    expect(inputPassword).toHaveValue('$#zebirita#$');

    const buttonLogin = screen.getByTestId('common_login__button-login');
    expect(buttonLogin).not.toHaveAttribute('disabled');
    fireEvent.click(buttonLogin);
    await waitFor(() => {
      expect(screen.getByText('Produtos')).toBeInTheDocument();
      expect(screen.getByText('MEUS PEDIDOS')).toBeInTheDocument();
      expect(screen.getByText('Cliente Zé Birita')).toBeInTheDocument();
      expect(screen.getByText('Sair')).toBeInTheDocument();
    }, { timeout: 2000 })
  });
});
