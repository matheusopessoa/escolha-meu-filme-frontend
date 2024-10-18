import React, { useContext, useState } from 'react'; 
import { AppContext } from '../../context'; 
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Background from '../components/Background';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';
import BackHome from '../components/BackHome';
import { useNavigate } from 'react-router-dom';
import SecondaryButton from '../components/SecondaryButton';

const releases = [
  'Não me importo com a data de lançamento',
  'Quero ver um filme anteriores a 1980',
  'Quero ver um filme entre 1980 e 2000',
  'Quero ver um filme entre 2000 e 2024'
];

// Estilizando o container que vai dividir em colunas
const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colunas com largura igual */
  gap: 10px; /* Espaço entre os botões */
  justify-items: center;
  padding: 20px;
  max-width: 100%;
`;


const ChooseReleaseRange = () => {
  const navigate = useNavigate();
  const { selectedRelease, setSelectedReleases } = useContext(AppContext); 

  const handleReleaseClick = (release) => {
    // Encontrar o índice da release que foi clicada
    const index = releases.indexOf(release);
  
    // Criar uma nova cópia do array selectedRelease
    const newSelectedRelease = [...selectedRelease];
  
    // Alterar o valor correspondente à posição do índice
    // Se for 'F', altera para 'T', se for 'T', altera para 'F'
    newSelectedRelease[index] = newSelectedRelease[index] === 'F' ? 'T' : 'F';
  
    // Atualizar o estado com o novo array
    setSelectedReleases(newSelectedRelease);
  };

  const goToGenres = () => {
    navigate('/generos');
  };

  const handleConfirmClick = async () => {
    if (selectedRelease.length < 1) return;
    goToGenres();
  };

  return (
    <Background>
      <BackHome />
      <Container>
        <Title>Em que período o filme foi lançado?</Title>
        <Subtitle>Você pode escolher todos, se quiser!</Subtitle>
        <ListContainer>
          {releases.map((release) => (
            <SecondaryButton
              key={release}
              selected={selectedRelease[releases.indexOf(release)] === 'T'}
              onClick={() => handleReleaseClick(release)}
            >
              {release}
            </SecondaryButton>
          ))}
        </ListContainer>

        <Button
          disabled={selectedRelease.length < 1}
          onClick={handleConfirmClick}
        >
          Confirmar
        </Button>
      </Container>
    </Background>
  );
};

export default ChooseReleaseRange;
