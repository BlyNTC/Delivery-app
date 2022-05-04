import {render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import React from 'react'

import '@testing-library/jest-dom'
import App from '../App'

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('Register', () => {
  it('should render register page', async () => {
    renderWithRouter(<App />, { route: '/register' })
    expect(screen.getByText('Cadastro')).toBeInTheDocument()

    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('');

    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');

    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');

    const buttonRegister = screen.getByTestId('common_register__button-register');
    expect(buttonRegister).toBeInTheDocument();
    expect(buttonRegister).toHaveTextContent('Cadastrar');
    expect(buttonRegister).toHaveAttribute('disabled');

    fireEvent.change(inputName, { target: { value: 'Renan Almeida' } })
    expect(inputName).toHaveValue('Renan Almeida');

    fireEvent.change(inputEmail, { target: { value: 'teste@teste.com' } })
    expect(inputEmail).toHaveValue('teste@teste.com');

    fireEvent.change(inputPassword, { target: { value: '123456' } })
    expect(inputPassword).toHaveValue('123456');

    expect(buttonRegister).not.toHaveAttribute('disabled');
  });
});