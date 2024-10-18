// src/screens/SorryScreen.jsx
import React, { useState } from 'react';
import Background from '../components/Background';
import Container from '../components/Container';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button'; // Importa o componente Button
import ChooseProviderScreen from './ChooseProviderScreen'; // Importa o componente ChooseProviderScreen

const SorryScreen = () => {
  const [retry, setRetry] = useState(false); // Estado para redirecionar para a ChooseProviderScreen

  // Função para alterar o estado e renderizar a ChooseProviderScreen
  const handleRetry = () => {
    setRetry(true);
  };

  // Renderiza a ChooseProviderScreen se o botão "Tente novamente" for clicado
  if (retry) {
    return <ChooseProviderScreen />;
  }

  return (
    <Background>
      <Container>
        <Title>Desculpe!</Title>
        <Subtitle>Não encontramos nenhum filme que atenda aos seus critérios. Tente novamente com outras opções.</Subtitle>
        <Button onClick={handleRetry}>Tente novamente</Button>
      </Container>
    </Background>
  );
};

export default SorryScreen;
