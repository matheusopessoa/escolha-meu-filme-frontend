// src/screens/Home.jsx
import React, { useState } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import SecondScreen from './SecondScreen'; // Importa a segunda tela
import Background from '../components/Background';
import Container from '../components/Container';

const Home = () => {
  const [showSecondScreen, setShowSecondScreen] = useState(false); // Estado para controlar a exibição da segunda tela

  const handleButtonClick = () => {
    setShowSecondScreen(true); // Ao clicar no botão, exibe a segunda tela
  };

  // Renderiza a segunda tela se o botão for clicado
  if (showSecondScreen) {
    return <SecondScreen setShowSecondScreen={setShowSecondScreen} />; // Passa o controle de estado para a segunda tela
  }

  return (
    <Background>
      <Container>
        <Title>Pare de escolher <br /> Comece a assistir</Title>
        <Subtitle>Deixe a parte chata conosco, apenas diga o que deseja</Subtitle>
        <Button onClick={handleButtonClick}>Escolha Meu Filme</Button>
      </Container>
    </Background>
  );
};

export default Home;
