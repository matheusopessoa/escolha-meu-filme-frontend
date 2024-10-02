import React, { useContext } from 'react';
import { AppContext } from '../../context'; // Verifique o caminho correto
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Background from '../components/Background';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';

const genres = [
  'Ação', 'Animação', 'Aventura', 'Comédia', 'Crime', 'Documentário',
  'Drama', 'Família', 'Fantasia', 'Faroeste', 'Ficção Científica', 'Guerra',
  'História', 'Mistério', 'Musical', 'Romance', 'Suspense', 'Terror'
];

// Estilizando o botão de gênero
const GenreButton = styled.button`
  background-color: ${(props) => (props.selected ? '#933FFE' : '#2a2a2a')};
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? '#6A2FC0' : '#555')};
  }

  @media (max-width: 768px) {
    width: 100%;  /* Para garantir que o botão ocupe toda a largura no mobile */
  }
`;

// Estilizando o container que vai dividir em colunas
const GenreListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas com largura igual */
  gap: 10px; /* Espaço de 10px entre os botões */
  justify-items: center;
  padding: 20px;
  max-width: 100%;
`;

const ThirdScreen = () => {
  const { selectedGenres, setSelectedGenres } = useContext(AppContext);  // Usando o contexto para armazenar gêneros

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      // Desselecionar o gênero
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else if (selectedGenres.length < 2) {
      // Selecionar até 2 gêneros
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  return (
    <Background>
      <Container>
        <Title>Qual gênero de filme você quer assistir?</Title>
        <Subtitle>Selecione até dois gêneros</Subtitle>

        <GenreListContainer>
          {genres.map((genre) => (
            <GenreButton
              key={genre}
              selected={selectedGenres.includes(genre)}
              onClick={() => handleGenreClick(genre)}
            >
              {genre}
            </GenreButton>
          ))}
        </GenreListContainer>

        <Button
          disabled={selectedGenres.length < 1}
          onClick={() => console.log('Gêneros selecionados no contexto:', selectedGenres)}
        >
          Confirmar
        </Button>
      </Container>
    </Background>
  );
};

export default ThirdScreen;
