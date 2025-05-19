import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  gap: 40px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color:rgb(255, 255, 255);
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 400px;
`;

const OptionButton = styled.button`
  background: ${props => props.selected ? '#6B46C1' : 'rgba(0, 0, 0, 0.75)'};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background: ${props => props.selected ? '#6B46C1' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
`;

const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

const ChoiceButton = styled.button`
  background: ${props => props.selected ? '#6B46C1' : 'rgba(0, 0, 0, 0.75)'};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.selected ? '#6B46C1' : 'rgba(255, 255, 255, 0.2)'};
    transform: translateY(-2px);
  }
`;

const ContinueButton = styled.button`
  background: #6B46C1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 30px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};

  &:hover {
    background: #553C9A;
    transform: translateY(-2px);
  }
`;

const genres = [
  'Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica',
  'Romance', 'Suspense', 'Terror', 'Animação', 'Documentário'
];

const providers = [
  'Netflix', 'Amazon', 'Disney', 'Max', 'Globoplay'
];

export default function SelectionPage() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setSelectedChoice(null);
  };

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };

  const handleContinue = () => {
    if (selectedType && selectedChoice) {
      navigate(`/top10/${selectedType}/${selectedChoice}`);
    }
  };

  return (
    <Layout>
      <Container>
        <Title>Escolha como quer descobrir filmes</Title>
        <Subtitle>Selecione uma opção para ver os Top 10</Subtitle>

        <OptionsContainer>
          <OptionButton
            selected={selectedType === 'genre'}
            onClick={() => handleTypeSelect('genre')}
          >
            Top 10 por Gênero
          </OptionButton>
          <OptionButton
            selected={selectedType === 'streaming'}
            onClick={() => handleTypeSelect('streaming')}
          >
            Top 10 por Streaming
          </OptionButton>
        </OptionsContainer>

        {selectedType && (
          <>
            <Subtitle>
              {selectedType === 'genre' ? 'Escolha um gênero' : 'Escolha um streaming'}
            </Subtitle>
            <ChoicesContainer>
              {(selectedType === 'genre' ? genres : providers).map((choice) => (
                <ChoiceButton
                  key={choice}
                  selected={selectedChoice === choice}
                  onClick={() => handleChoiceSelect(choice)}
                >
                  {choice}
                </ChoiceButton>
              ))}
            </ChoicesContainer>
            <ContinueButton
              disabled={!selectedChoice}
              onClick={handleContinue}
            >
              Ver Top 10
            </ContinueButton>
          </>
        )}
      </Container>
    </Layout>
  );
} 