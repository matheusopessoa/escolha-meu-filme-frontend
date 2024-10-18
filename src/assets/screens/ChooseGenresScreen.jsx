import React, { useContext, useState } from 'react'; // Adiciona o useState
import { AppContext } from '../../context'; // Verifique o caminho correto
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Background from '../components/Background';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';
import { fetchMovies } from '../services/getMovies'; // Importando a função de requisição
import BackHome from '../components/BackHome';
import { useNavigate } from 'react-router-dom';

const genres = [
  'Ação', 'Animação', 'Aventura', 'Comédia', 'Crime', 'Documentário',
  'Drama', 'Família', 'Fantasia', 'Faroeste', 'Ficção Científica', 'Guerra',
  'História', 'Mistério', 'Musical', 'Romance', 'Suspense', 'Terror'
];

const GenreButton = styled.button`
  background-color: ${(props) => (props.selected ? '#005ab3' : '#2a2a2a')};
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? '#1E90FF' : '#555')};
  }

  @media (max-width: 768px) {
    width: 100%;  /* Para garantir que o botão ocupe toda a largura no mobile */
    padding: 10px;
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

const ChooseGenresScreen = () => {
  const navigate = useNavigate();
  const { selectedService, selectedGenres, setSelectedGenres, setMovies } = useContext(AppContext);  // Usando o contexto para armazenar gêneros e filmes

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
  
  const goToMovies = () => {
    navigate('/filmes');
  }
  const goToSorry = () => {
    navigate('/indisponivel')
  }

  const handleConfirmClick = async () => {
    if (selectedGenres.length < 1) return;

    try {
      // Chama a função fetchMovies do arquivo de serviço e faz a requisição
      const data = await fetchMovies(selectedService, selectedGenres);

      // Armazenar os filmes no contexto
      setMovies(data);

      const data_length = Object.keys(data).length
      if (data_length === 0) {
        console.log(data_length === 0)
        goToSorry()
      } else if (data_length > 0) {
        console.log(data_length > 0)
        goToMovies()
      }
    } catch (error) {
    }
  };


  return (
    <Background>
      <BackHome></BackHome>
      <Container>
        <Title>Quais gêneros de filme você prefere?</Title>
        <Subtitle>Escolha até dois gêneros para personalizar suas recomendações de filmes</Subtitle>
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

export default ChooseGenresScreen;
