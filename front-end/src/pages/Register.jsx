import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Inputs';
import MyContext from '../context';
import { doRegister } from '../utils/axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [hidden, setHidden] = useState(true);
  const { loginSuccess } = useContext(MyContext);
  const navigate = useNavigate();

  function validateEmail(inputEmail) {
    const re = /\S+@\S+\.\S+/;
    return re.test(inputEmail);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setHidden(true);
    doRegister({ name, email, password }).then((data) => {
      loginSuccess(data);
      navigate('/customer/products');
    }).catch(() => {
      setHidden(false);
    });
  }

  useEffect(() => {
    const NAME_LENGTH = 12;
    const PASSWORD_LENGTH = 6;
    if (name.length >= NAME_LENGTH && validateEmail(email) && password
      .length >= PASSWORD_LENGTH) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, password]);

  return (
    <form>
      <h1>Cadastro</h1>
      <Input
        type="text"
        name="Nome"
        placeholder="Digite seu nome"
        testid="common_register__input-name"
        value={ name }
        onChange={ (e) => setName(e.target.value) }
      />
      <Input
        type="email"
        name="Email"
        placeholder="user@email.com"
        testid="common_register__input-email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <Input
        type="password"
        name="Senha"
        placeholder="Digite sua senha"
        testid="common_register__input-password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="submit"
        value="Cadastrar"
        disabled={ disabled }
        onClick={ handleSubmit }
        data-testid="common_register__button-register"
      >
        Cadastrar
      </button>
      <span
        data-testid="common_register__element-invalid_register"
        hidden={ hidden }
      >
        Usuario ja cadastrado
      </span>
    </form>

  );
}
export default Register;
