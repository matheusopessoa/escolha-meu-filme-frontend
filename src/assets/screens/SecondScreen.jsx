import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import ButtonList from '../components/ButtonList';
import Background from '../components/Background';
import Container from '../components/Container';
import styled from 'styled-components';
import ThirdScreen from './ThirdScreen'; // Importa a ThirdScreen

const streamingServices = [
  'Netflix', 
  'Max', 
  'Amazon Prime', 
  'AppleTV', 
  'Disney Plus', 
  'Paramount', 
  'Crunchyroll', 
  'Pluto TV', 
  'Globoplay'
];

const StreamingItem = styled.div`
  background-color: #2a2a2a;
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const SecondScreen = () => {
  const { selectedService, setSelectedService } = useContext(AppContext);  // Acessa o contexto
  const [showStreamingList, setShowStreamingList] = useState(false);
  const [goToThirdScreen, setGoToThirdScreen] = useState(false); // Estado para controlar a navegação

  const handleServiceClick = (service) => {
    setSelectedService(service);  // Atualiza o estado global com o serviço selecionado
    setShowStreamingList(false);  // Oculta a lista após a seleção
  };

  const handleToggleList = () => {
    setShowStreamingList(!showStreamingList);  // Alterna entre mostrar e ocultar a lista
  };

  const handleConfirmClick = () => {
    setGoToThirdScreen(true);  // Muda o estado para ir para a terceira tela
  };

  // Se o estado goToThirdScreen for true, renderiza a ThirdScreen
  if (goToThirdScreen) {
    return <ThirdScreen />;  // Renderiza a tela de seleção de gêneros
  }

  return (
    <Background>
      <Container>
        <Title>Escolha seu Serviço de Streaming</Title>
        <Subtitle>Selecione um serviço para continuar</Subtitle>

        <ButtonList onClick={handleToggleList}>
          {selectedService ? selectedService : 'Escolher Serviço'}
        </ButtonList>

        {showStreamingList && (
          <ListContainer>
            {streamingServices.map((service) => (
              <StreamingItem
                key={service}
                onClick={() => handleServiceClick(service)}
              >
                {service}
              </StreamingItem>
            ))}
          </ListContainer>
        )}

        {selectedService && (
          <Button onClick={handleConfirmClick}>
            Confirmar
          </Button>
        )}
      </Container>
    </Background>
  );
};

export default SecondScreen;
