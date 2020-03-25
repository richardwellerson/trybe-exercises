import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const doForro = ['Eu vou tocar', 'o meu forro', 'RAM', 'pra voce dançar', 'do chão levantar pó'];
  return (<div>
    <h1>Isso é, Garotos Bond'Xote</h1>
    <ol>
      {doForro.map(frase => <li>{frase}</li>)}
    </ol>
  </div>
  );
}

export default App;
