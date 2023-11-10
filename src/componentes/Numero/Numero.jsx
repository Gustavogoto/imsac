import React, { useState, useEffect } from 'react';
import './Numero.css';

function Numero() {
  // Estado para armazenar o número aleatório
  const [randomNumber, setRandomNumber] = useState(0);

  // Função para gerar um novo número aleatório
  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    setRandomNumber(newRandomNumber);

    // Armazena o número aleatório no localStorage
    localStorage.setItem('randomNumber', newRandomNumber.toString());
  };

  // Efeito para carregar o número aleatório do localStorage ao montar o componente
  useEffect(() => {
    const storedRandomNumber = localStorage.getItem('randomNumber');
    if (storedRandomNumber) {
      setRandomNumber(parseInt(storedRandomNumber));
    }
  }, []);

  return (
    <div>
      <h1>Número Aleatório: {randomNumber}</h1>
      <button onClick={generateRandomNumber}>Gerar Novo Número Aleatório</button>
    </div>
  );
}

export default Numero;