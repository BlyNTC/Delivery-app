import React, { useState } from 'react';
import Input from '../components/Inputs';

function Register() {
  const [name, setName] = useState('');
  // const [email, setEmail] = useEffect('');
  // const [password, setPassword] = useEffect('');

  return (
    <form>
      <h1>Cadastro</h1>
      <Input text='olar' />
      <label htmlFor="name">
        Nome:
        <input type="text" name="name" id="name" placeholder="fulano"  />
      </label>
      <label htmlFor="email">
        Nome:
        <input type="email" name="email" id="email" placeholder="meu_email@email.com" />
      </label>
      <label htmlFor="password">
        Nome:
        <input type="password" name="password" id="password" placeholder="super senha" />
      </label>
      <input type="submit" value="Cadastrar" />
    </form>
  );
}
export default Register;
