import React, { useState } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Background2 from '../components/Background2';
import Container from '../components/Container';
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FifthScreen from './FifthScreen';
import styled from 'styled-components';
import BackHome from '../components/BackHome';

// Estilizando os botões do tutorial
const CircleButton = styled.span`
  display: inline-flex;
  background-color: ${(props) => (props.like ? 'red' : 'gray')};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  svg {
    font-size: 24px;
    color: white;
  }
`;

const FourthScreen = () => {
  const [goToFifthScreen, setGoToFifthScreen] = useState(false);

  const handleContinueClick = () => {
    setGoToFifthScreen(true);
  };

  if (goToFifthScreen) {
    return <FifthScreen />;
  }

  return (
    <Background2>
      <BackHome/>
      <Container>
        <Title>Como Escolher um Filme</Title>

        <p style={{ color: 'white', textAlign: 'center', maxWidth: '80%', margin: '20px auto', fontSize: '18px' }}>
          Na próxima tela, você verá uma lista de filmes recomendados.</p>

          <p style={{ color: 'white', textAlign: 'center', maxWidth: '80%', margin: '20px auto', fontSize: '18px' }}>
          Se encontrar um filme de que goste, clique no ícone 
          <CircleButton like>
            <FontAwesomeIcon icon={faHeartRegular} />
          </CircleButton>
          para selecioná-lo.</p>
          <p style={{ color: 'white', textAlign: 'center', maxWidth: '80%', margin: '20px auto', fontSize: '18px' }}>
          Se não gostar, clique no ícone
          <CircleButton>
            <FontAwesomeIcon icon={faTimes} />
          </CircleButton>
          para receber outra sugestão.
        </p>

        <Button onClick={handleContinueClick}>Continuar</Button>
      </Container>
    </Background2>
  );
};

export default FourthScreen;
