// src/screens/SecondScreen.jsx
import React, { useState } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import ButtonList from '../components/ButtonList'; // Importando o novo ButtonList
import Background from '../components/Background';
import Container from '../components/Container';
import styled from 'styled-components';

// Serviços de streaming
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

// Estilizando cada item da lista
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

// Container para a lista de serviços de streaming
const ListContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

const SecondScreen = () => {
  const [selectedService, setSelectedService] = useState(null);  // Estado para o serviço selecionado
  const [showStreamingList, setShowStreamingList] = useState(false);  // Estado para mostrar ou ocultar a lista

  const handleServiceClick = (service) => {
    setSelectedService(service);  // Armazena o serviço selecionado
    setShowStreamingList(false);  // Oculta a lista após a seleção
  };

  const handleToggleList = () => {
    setShowStreamingList(!showStreamingList);  // Alterna entre mostrar e ocultar a lista
  };

  const handleConfirmClick = () => {
    console.log(`Serviço selecionado: ${selectedService}`);
  };

  return (
    <Background>
      <Container>
        <Title>Escolha seu Serviço de Streaming</Title>
        <Subtitle>Selecione um serviço para continuar</Subtitle>

        {/* Botão para mostrar o nome do serviço selecionado ou "Escolher Serviço" */}
        <ButtonList onClick={handleToggleList}>
          {selectedService ? selectedService : 'Escolher Serviço'}
        </ButtonList>

        {/* Lista de serviços de streaming aparece quando showStreamingList for true */}
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

        {/* Botão para confirmar a escolha */}
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
