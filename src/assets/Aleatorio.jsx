import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import PurpleButton from './components/PurpleButton';
import WatchButton from '../components/WatchButton';
import Layout from '../components/Layout';
import { fetchTop10ByGenre } from './utils/top10_genre';
import { fetchTop10ByProvider } from './utils/top10_provider';

const AleatorioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: rgba(31, 41, 55, 0.95);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  gap: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(75, 85, 99, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const MoviePoster = styled.img`
  width: 150px;
  height: 225px;
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
  color: white;
`;

const MovieDescription = styled.p`
  margin: 0 0 10px 0;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.8);
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const WatchButtonContainer = styled.div`
  margin-top: 15px;
`;

const ErrorContainer = styled.div`
  color: #DC2626;
  text-align: center;
  margin-top: 20px;
  background: rgba(220, 38, 38, 0.1);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgba(220, 38, 38, 0.2);
`;

const providers = ['netflix', 'amazon', 'disney', 'max', 'globoplay'];
const genres = ['Ação', 'Aventura', 'Comédia', 'Animação', 'Crime', 'Drama', 
  'Família', 'Fantasia', 'História', 'Horror', 'Musical', 'Mistério', 
  'Romance', 'Ficção Científica', 'Terror', 'Guerra', 'Faroeste'];

export default function Aleatorio() {
  const [currentMovie, setCurrentMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRandomMovie = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Tenta até 3 vezes para encontrar um filme diferente
      let attempts = 0;
      let newMovie = null;
      
      while (attempts < 3 && (!newMovie || (currentMovie && newMovie[0] === currentMovie[0]))) {
        attempts++;
        
        // Escolhe aleatoriamente entre buscar por gênero ou por provedor
        const useGenre = Math.random() > 0.5;
        let movies = [];

        if (useGenre) {
          const randomGenre = genres[Math.floor(Math.random() * genres.length)];
          movies = await fetchTop10ByGenre(randomGenre);
        } else {
          const randomProvider = providers[Math.floor(Math.random() * providers.length)];
          movies = await fetchTop10ByProvider(randomProvider);
        }

        if (movies && movies.length > 0) {
          // Remove o filme atual da lista de possibilidades
          const availableMovies = currentMovie 
            ? movies.filter(movie => movie[0] !== currentMovie[0])
            : movies;

          if (availableMovies.length > 0) {
            // Escolhe aleatoriamente da lista filtrada
            const randomIndex = Math.floor(Math.random() * availableMovies.length);
            newMovie = availableMovies[randomIndex];
          }
        }
      }

      if (newMovie) {
        setCurrentMovie(newMovie);
      } else {
        throw new Error('Não foi possível encontrar um filme diferente');
      }
    } catch (e) {
      console.error('Erro ao buscar filme:', e);
      setError('Não foi possível encontrar um filme. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRandomMovie();
  }, []);

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
              <MoviePoster 
                src={`https://image.tmdb.org/t/p/w500${currentMovie[11]}`} 
                alt={currentMovie[4]}
                onError={(e) => {
                  e.target.src = '/placeholder.jpg';
                }}
              />
              <MovieInfo>
                <MovieTitle>{currentMovie[4]}</MovieTitle>
                <MovieDescription>{currentMovie[5]}</MovieDescription>
                <MovieDetails>
                  <span>Ano: {new Date(currentMovie[8]).getFullYear()}</span>
                  <span>Nota: {(currentMovie[9] + 0.2).toFixed(1)}</span>
                  <span>Streaming: {currentMovie[2].charAt(0).toUpperCase() + currentMovie[2].slice(1)}</span>
                </MovieDetails>
                <WatchButtonContainer>
                  <WatchButton provider={currentMovie[2].charAt(0).toUpperCase() + currentMovie[2].slice(1)} />
                </WatchButtonContainer>
              </MovieInfo>
            </MovieCard>
            <ButtonsContainer>
              <PurpleButton onClick={getRandomMovie}>
                Tentar outro filme
              </PurpleButton>
              <PurpleButton onClick={() => window.location.href = '/'}>
                Voltar para o início
              </PurpleButton>
            </ButtonsContainer>
          </ContentContainer>
        ) : error ? (
          <ErrorContainer>
            <p>{error}</p>
            <PurpleButton onClick={getRandomMovie}>
              Tentar novamente
            </PurpleButton>
          </ErrorContainer>
        ) : null}
      </AleatorioContainer>
    </Layout>
  );
}
