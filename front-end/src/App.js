import React from 'react';
import Provider from './context/Provider';
import Rotas from './routes/Rotas';
import './App.css';

function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

export default App;
