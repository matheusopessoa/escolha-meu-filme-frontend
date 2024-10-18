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

// Opções de duração
const runtimes = [
  'Não me importo com a duração do filme',
  'Quero ver um filme de até 1h',
  'Quero ver um filme de até 2h',
  'Quero ver um filme de até 3h'
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

const ChooseRuntimeRange = () => {
  const navigate = useNavigate();
  const { selectedRuntime, setSelectedRuntime } = useContext(AppContext); 

  const handleRuntimeClick = (runtime) => {
    // Encontrar o índice da runtime que foi clicada
    const index = runtimes.indexOf(runtime);
  
    // Criar uma nova cópia do array selectedRuntime
    const newSelectedRuntime = [...selectedRuntime];
  
    // Alterar o valor correspondente à posição do índice
    // Se for 'F', altera para 'T', se for 'T', altera para 'F'
    newSelectedRuntime[index] = newSelectedRuntime[index] === 'F' ? 'T' : 'F';
  
    // Atualizar o estado com o novo array
    setSelectedRuntime(newSelectedRuntime);
  };

  const goToGenres = () => {
    navigate('/generos');
  };

  const handleConfirmClick = async () => {
    const newSelectedRuntime = [...selectedRuntime];
    if (newSelectedRuntime.every(value => value === 'F')) return;
    goToGenres();
  };

  return (
    <Background>
      <BackHome />
      <Container>
        <Title>Qual a duração do filme que você prefere?</Title>
        <Subtitle>Você pode escolher todos, se quiser! <br/>Nosso algorítmo cuidará disso</Subtitle>
        <ListContainer>
          {runtimes.map((runtime) => (
            <SecondaryButton
              key={runtime}
              selected={selectedRuntime[runtimes.indexOf(runtime)] === 'T'}
              onClick={() => handleRuntimeClick(runtime)}
            >
              {runtime}
            </SecondaryButton>
          ))}
        </ListContainer>

        <Button
          disabled={selectedRuntime.length < 1}
          onClick={handleConfirmClick}
        >
          Confirmar
        </Button>
      </Container>
    </Background>
  );
};

export default ChooseRuntimeRange;
