// src/screens/SorryScreen.jsx
import React, { useState } from 'react';
import Background2 from '../components/Background2';
import Container from '../components/Container';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button'; // Importa o componente Button
import SecondScreen from './SecondScreen'; // Importa o componente SecondScreen

const SorryScreen = () => {
  const [retry, setRetry] = useState(false); // Estado para redirecionar para a SecondScreen

  // Função para alterar o estado e renderizar a SecondScreen
  const handleRetry = () => {
    setRetry(true);
  };

  // Renderiza a SecondScreen se o botão "Tente novamente" for clicado
  if (retry) {
    return <SecondScreen />;
  }

  return (
    <Background2>
      <Container>
        <Title>Desculpe!</Title>
        <Subtitle>Não encontramos nenhum filme que atenda aos seus critérios. Tente novamente com outras opções.</Subtitle>
        <Button onClick={handleRetry}>Tente novamente</Button>
      </Container>
    </Background2>
  );
};

export default SorryScreen;
