import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import ButtonList from '../components/ButtonList';
import Background from '../components/Background';
import Container from '../components/Container';
import styled from 'styled-components';
import BackHome from '../components/BackHome';
import { useNavigate } from 'react-router-dom';

const streamingServices = [
  'Paramount', 
  'Crunchyroll', 
  'Max', 
  'Amazon Prime',  
  'Disney Plus', 
  'Netflix', 
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

const ChooseProviderScreen = () => {
  const navigate = useNavigate();

  const { selectedService, setSelectedService } = useContext(AppContext);  // Acessa o contexto
  const [showStreamingList, setShowStreamingList] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);  // Atualiza o estado global com o serviço selecionado
    setShowStreamingList(false);  // Oculta a lista após a seleção
    navigate('/lancamentos')
  };

  const handleToggleList = () => {
    setShowStreamingList(!showStreamingList);  // Alterna entre mostrar e ocultar a lista
  };

  return (

    <Background>
      <BackHome/>
      <Container>
        <Title>Em qual plataforma você quer assistir? </Title>
        <Subtitle>Selecione sua opção de streaming abaixo.</Subtitle>

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
      </Container>
    </Background>
  );
};

export default ChooseProviderScreen;
