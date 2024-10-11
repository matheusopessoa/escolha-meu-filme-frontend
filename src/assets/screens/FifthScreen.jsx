// src/screens/FifthScreen.jsx
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context'; // Consumindo os filmes do contexto
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Background2 from '../components/Background2';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ThankYouScreen from './ThankYouScreen'; // Importar tela de agradecimento
import SorryScreen from './SorryScreen'; // Importar tela de desculpas

// Estilizando os botões e o container dos filmes
const CircleButton = styled.button`
  background-color: ${(props) => (props.like ? 'red' : 'gray')};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.like ? '#ff4d4d' : '#555')};
  }

  svg {
    font-size: 36px;
    color: white;
  }
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

const MovieTitle = styled.h3`
  color: white;
  text-align: center;
  margin-top: 10px;
`;

const FifthScreen = () => {
  const { movies } = useContext(AppContext); // Pegando os filmes do contexto
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0); // Estado para rastrear o índice do filme atual
  const [goToThankYou, setGoToThankYou] = useState(false); // Estado para controle de navegação para a tela de agradecimento
  const [feedbacks, setFeedbacks] = useState([]); // Estado para armazenar os feedbacks
  const [selectedMovie, setSelectedMovie] = useState(null); // Armazenar o nome e o poster do filme

  const movieKeys = Object.keys(movies); // Obtenha as chaves dos filmes para indexar

  // Verifica se existem filmes disponíveis
  if (movieKeys.length === 0) {
    return <SorryScreen />; // Renderiza a tela de desculpas se não houver filmes
  }

  // Se o estado goToThankYou for true, renderiza a tela de agradecimento e passa o filme selecionado
  if (goToThankYou && selectedMovie) {
    return <ThankYouScreen movie={selectedMovie} />;
  }

  const handleLikeClick = async () => {
    const currentMovie = movies[movieKeys[currentMovieIndex]];
    const movieId = currentMovie[0]; // Pegando o ID do filme
    const movieTitle = movieKeys[currentMovieIndex]; // Nome do filme
    const posterUrl = `https://image.tmdb.org/t/p/w500${currentMovie[11]}`; // URL do poster

    // Adiciona o feedback "like" apenas se o filme ainda não tiver feedback registrado
    setFeedbacks((prevFeedbacks) => {
      if (!prevFeedbacks.some((feedback) => feedback.movie_id === movieId)) {
        return [
          ...prevFeedbacks,
          { movie_id: movieId, feedback: 'like' }
        ];
      }
      return prevFeedbacks;
    });

    // Armazenar o nome e o poster do filme para a tela de agradecimento
    setSelectedMovie({ title: movieTitle, posterUrl });

    // Envia o feedback ao backend
    await sendFeedbackToBackend();

    // Navegar para a tela de agradecimento
    setGoToThankYou(true);
  };

  const handleDislikeClick = async () => {
    const currentMovie = movies[movieKeys[currentMovieIndex]];
    const movieId = currentMovie[0]; // Pegando o ID do filme

    // Adiciona o feedback "dislike" apenas se o filme ainda não tiver feedback registrado
    setFeedbacks((prevFeedbacks) => {
      if (!prevFeedbacks.some((feedback) => feedback.movie_id === movieId)) {
        return [
          ...prevFeedbacks,
          { movie_id: movieId, feedback: 'dislike' }
        ];
      }
      return prevFeedbacks;
    });

    // Se houver mais filmes, avança para o próximo
    if (currentMovieIndex < movieKeys.length - 1) {
      setCurrentMovieIndex(currentMovieIndex + 1); // Avança para o próximo filme
    } else {
      setCurrentMovieIndex(0); // Volta ao primeiro filme se todos os filmes forem exibidos
    }
  };

  // Função para enviar os feedbacks ao backend
  const sendFeedbackToBackend = async () => {
    const feedbackBody = {
      feedbacks: feedbacks
    };

    try {
      const API_URL = 'https://escolha-meu-filme-production.up.railway.app'; // Lê a URL base da API do ambiente
    
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackBody),
      });
    
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
    
      const data = await response.json();
      return data;
    
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
    }
  }
    

  const currentMovie = movies[movieKeys[currentMovieIndex]]; // Filme atual
  const posterUrl = `https://image.tmdb.org/t/p/w500${currentMovie[11]}`; // URL da imagem

  return (
    <Background2>
      <Container>
        <Title>Seleção de Filmes</Title>

        {/* Exibe o filme atual */}
        <MovieContainer>
          <MovieImage src={posterUrl} alt={movieKeys[currentMovieIndex]} />
          <MovieTitle>{movieKeys[currentMovieIndex]}</MovieTitle>
        </MovieContainer>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          <CircleButton onClick={handleDislikeClick}>
            <FontAwesomeIcon icon={faTimes} />
          </CircleButton>

          <CircleButton like onClick={handleLikeClick}>
            <FontAwesomeIcon icon={faHeartRegular} />
          </CircleButton>
        </div>
      </Container>
    </Background2>
  );
};

export default FifthScreen;
