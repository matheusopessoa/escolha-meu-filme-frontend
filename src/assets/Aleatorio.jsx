import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import PurpleButton from './components/PurpleButton';
import WatchButton from '../components/WatchButton';
import Layout from '../components/Layout';

const AleatorioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  color: white;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1.2em;
  opacity: 0.8;
`;

const LoadingText = styled.p`
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;

const MovieCard = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  gap: 20px;
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const MoviePoster = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
    margin-bottom: 15px;
  }
`;

const MovieInfo = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MovieTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.5em;
`;

const MovieDescription = styled.p`
  margin: 0 0 10px 0;
  font-size: 1em;
  opacity: 0.9;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  opacity: 0.8;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const WatchButtonContainer = styled.div`
  margin-top: 15px;
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

export default function Aleatorio() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleNewRandomMovie();
  }, []);

  const handleNewRandomMovie = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://escolhameufilme.com/api/random`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCurrentMovie(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <AleatorioContainer>
        <TitleContainer>
          <Title>Filme Aleatório</Title>
          <Subtitle>Não sabe o que assistir? Deixa que a gente escolhe para você!</Subtitle>
        </TitleContainer>

        {isLoading ? (
          <LoadingContainer>
            <LoadingText>Buscando um filme aleatório para você...</LoadingText>
          </LoadingContainer>
        ) : currentMovie ? (
          <ContentContainer>
            <MovieCard>
              <MoviePoster src={`https://image.tmdb.org/t/p/w342${currentMovie[11]}`} alt={currentMovie[4]} />
              <MovieInfo>
                <MovieTitle>{currentMovie[4]}</MovieTitle>
                <MovieDescription>{currentMovie[5]}</MovieDescription>
                <MovieDetails>
                  <span>Ano: {new Date(currentMovie[8]).getFullYear()}</span>
                  <span>Nota: {(currentMovie[9] + 0.2).toFixed(2)}</span>
                  <span>Gênero: {currentMovie[7]}</span>
                  <span>Streaming: {currentMovie[2].charAt(0).toUpperCase() + currentMovie[2].slice(1)}</span>
                </MovieDetails>
                <WatchButtonContainer>
                  <WatchButton provider={currentMovie[2].charAt(0).toUpperCase() + currentMovie[2].slice(1)} />
                </WatchButtonContainer>
              </MovieInfo>
            </MovieCard>
            <ButtonsContainer>
              <PurpleButton onClick={handleNewRandomMovie}>
                Tentar outro filme
              </PurpleButton>
              <PurpleButton onClick={() => window.location.href = '/'}>
                Voltar para o início
              </PurpleButton>
            </ButtonsContainer>
          </ContentContainer>
        ) : (
          <ErrorContainer>
            <p>Não foi possível carregar um filme. Por favor, tente novamente.</p>
            <PurpleButton onClick={handleNewRandomMovie}>
              Tentar novamente
            </PurpleButton>
          </ErrorContainer>
        )}
      </AleatorioContainer>
    </Layout>
  );
}
