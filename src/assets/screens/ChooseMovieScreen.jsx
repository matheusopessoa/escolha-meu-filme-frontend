// src/screens/ChooseMovieScreen.jsx
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context'; // Consumindo os filmes do contexto
import Title from '../components/Title';
import Background from '../components/Background';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import sendFeedbackToBackend from '../services/post'; // Importar a função do serviço
import BackHome from '../components/BackHome';
import { useNavigate } from 'react-router-dom';
import ButtonList from '../components/ButtonList';

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
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;

  ${(props) =>
    props.animationDirection === 'left' &&
    `
    transform: translateX(-300%) rotate(-30deg);
    opacity: 0;
  `}

  ${(props) =>
    props.animationDirection === 'grow' &&
    `
    transform: scale(1.5);
    opacity: 0;
  `}
`;

const MovieTitle = styled.h3`
  color: white;
  text-align: center;
  margin-top: 10px;
`;


// Estilos para o modal de sinopse
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #222;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ChooseMovieScreen = () => {
  const navigate = useNavigate();
  const { movies, setTheMovie } = useContext(AppContext); 
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0); // Índice do filme atual
  const [feedbacks, setFeedbacks] = useState([]); // Armazena os feedbacks
  const [selectedMovie, setSelectedMovie] = useState(null); // Nome e poster do filme
  const [showSynopsis, setShowSynopsis] = useState(false); // Controla a exibição da sinopse
  const [animationDirection, setAnimationDirection] = useState(null); // Direção da animação
  const [showPoster, setShowPoster] = useState(true); // Controla a exibição do cartaz
  const [showTitle, setShowTitle] = useState(true); // Controla a exibição do título
  const [canDislike, setCanDislike] = useState(true);

  const movieKeys = Object.keys(movies); // Chaves dos filmes

  const goToThankYou = () => {
    navigate('/obrigado');
  }

  const handleLikeClick = () => {
    const currentMovie = movies[movieKeys[currentMovieIndex]];
    const movieId = currentMovie[0]; // ID do filme
    const movieTitle = movieKeys[currentMovieIndex]; // Nome do filme
    const posterUrl = `https://image.tmdb.org/t/p/w500${currentMovie[11]}`; // URL do poster

    // Armazena o nome e o poster do filme para a tela de agradecimento
    setTheMovie([ movieTitle, posterUrl ]);

    // Adiciona o feedback "like" se ainda não estiver registrado
    setFeedbacks((prevFeedbacks) => {
      if (!prevFeedbacks.some((feedback) => feedback.movie_id === movieId)) {
        return [...prevFeedbacks, { movie_id: movieId, feedback: 'like' }];
      }
      return prevFeedbacks;
    });

    // Inicia a animação de crescimento
    setAnimationDirection('grow');

    // Oculta o título
    setShowTitle(false);
    goToThankYou()
  };

  const handleDislikeClick = () => {
    if (!canDislike) return;
    else {
      const currentMovie = movies[movieKeys[currentMovieIndex]];
      const movieId = currentMovie[0]; // ID do filme
  
      // Adiciona o feedback "dislike" se ainda não estiver registrado
      setFeedbacks((prevFeedbacks) => {
        if (!prevFeedbacks.some((feedback) => feedback.movie_id === movieId)) {
          return [...prevFeedbacks, { movie_id: movieId, feedback: 'dislike' }];
        }
        return prevFeedbacks;
      });
  
      setAnimationDirection('left');
  
      setCanDislike(false);
      setTimeout(() => {
          setCanDislike(true);
      }, 650);
    }
};

  const handleAnimationEnd = async () => {
    if (animationDirection === 'grow') {
      // Oculta o cartaz após a animação
      setShowPoster(false);

      // Envia o feedback ao backend
      await sendFeedbackToBackend(feedbacks);

      setSelectedMovie(true)
    } else if (animationDirection === 'left') {
      // Após a animação, resetamos a direção e o cartaz
      setAnimationDirection(null);
      setShowPoster(true); // Prepara para exibir o próximo cartaz

      // Avança para o próximo filme de forma circular
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movieKeys.length);
    }
  };

  const handleSynopsisClick = () => {
    setShowSynopsis(true);
  };

  const handleCloseSynopsis = () => {
    setShowSynopsis(false);
  };

  const currentMovie = movies[movieKeys[currentMovieIndex]]; // Filme atual
  const posterUrl = `https://image.tmdb.org/t/p/w500${currentMovie[11]}`; // URL da imagem
  const movieOverview = currentMovie[5]; // Sinopse do filme

  return (
    <Background>
      <BackHome />
      <Container>
        {/* Renderiza o título apenas se showTitle for true */}
        {showTitle && (
          <>
            <Title>Seleção de Filmes</Title>
            
            <br />
          </>
        )}

        {/* Exibe o filme atual se showPoster for true */}
        {showPoster && (
          <MovieContainer>
            <MovieImage
              src={posterUrl}
              alt={movieKeys[currentMovieIndex]}
              animationDirection={animationDirection}
              onTransitionEnd={handleAnimationEnd}
            />
            <MovieTitle>{movieKeys[currentMovieIndex]}</MovieTitle>
            <ButtonList onClick={handleSynopsisClick}>Ler Sinopse</ButtonList>
          </MovieContainer>
        )}

        {/* Modal de Sinopse */}
        {showSynopsis && (
          <ModalBackground onClick={handleCloseSynopsis}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <h2>Sinopse</h2>
              <p>{movieOverview}</p>
              <CloseButton onClick={handleCloseSynopsis}>Fechar</CloseButton>
            </ModalContent>
          </ModalBackground>
        )}

        {/* Botões só aparecem se o cartaz estiver sendo exibido */}
        {showPoster && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '20px',
            }}
          >
            <CircleButton onClick={handleDislikeClick}>
              <FontAwesomeIcon icon={faTimes} />
            </CircleButton>

            <CircleButton like onClick={handleLikeClick}>
              <FontAwesomeIcon icon={faHeartRegular} />
            </CircleButton>
          </div>
        )}
      </Container>
    </Background>
  );
};

export default ChooseMovieScreen;
