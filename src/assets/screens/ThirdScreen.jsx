import React, { useContext, useState } from 'react'; // Adiciona o useState
import { AppContext } from '../../context'; // Verifique o caminho correto
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Background from '../components/Background';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';
import { fetchMovies } from '../services/getMovies'; // Importando a função de requisição
import FourthScreen from './FourthScreen'; // Importa a quarta tela

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
  const { selectedService, selectedGenres, setSelectedGenres, setMovies } = useContext(AppContext);  // Usando o contexto para armazenar gêneros e filmes
  const [goToFourthScreen, setGoToFourthScreen] = useState(false); // Estado para controlar a navegação

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      // Desselecionar o gênero se ele já estiver selecionado
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else if (selectedGenres.length === 2) {
      // Se já houver dois gêneros, remover o primeiro e adicionar o novo
      setSelectedGenres([selectedGenres[1], genre]);
    } else {
      // Se houver menos de dois gêneros, apenas adicionar o novo
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleConfirmClick = async () => {
    if (selectedGenres.length < 1) return;

    try {
      // Chama a função fetchMovies do arquivo de serviço e faz a requisição
      const data = await fetchMovies(selectedService, selectedGenres);
      console.log('Dados recebidos da API:', data);

      // Armazenar os filmes no contexto
      setMovies(data);

      // Navegar para a quarta tela após a requisição
      setGoToFourthScreen(true);
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  // Se o estado "goToFourthScreen" for true, renderiza a quarta tela
  if (goToFourthScreen) {
    return <FourthScreen />;
  }

  return (
    <Background>
      <Container>
        <Title>Escolha os Gêneros de Filme</Title>
        <Subtitle>Selecione até dois gêneros para personalizar sua recomendação</Subtitle>

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
          onClick={handleConfirmClick}  // Chama a função de requisição e navega para a quarta tela
        >
          Confirmar
        </Button>
      </Container>
    </Background>
  );
};

export default ThirdScreen;
