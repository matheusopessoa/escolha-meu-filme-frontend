import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Background from './components/Background';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Button from './components/Button';
import ButtonList from './components/ButtonList';
import PurpleButton from './components/PurpleButton';
import Footer from './components/Footer';
import styled from 'styled-components';
import Header from './components/Header';
import { top10_genre } from './utils/top10_genre';
import { top10_provider } from './utils/top10_provider';
import WatchButton from '../components/WatchButton';

const MovieCard = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 15px auto;
  width: 95%;
  max-width: 800px;
  gap: 10px;
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

const MoviePoster = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  flex-shrink: 0;
`;

const MovieInfo = styled.div`
  flex: 1;
  color: white;
`;

const MovieTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1rem;
  word-wrap: break-word;
`;

const MovieDescription = styled.p`
  margin: 0 0 10px 0;
  font-size: 1rem;
  opacity: 0.9;
  word-wrap: break-word;
`;

const MovieDetails = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  font-size: 0.9rem;
  opacity: 0.8;
  flex-wrap: wrap;
`;

export default function Top10() {
  const { type, option } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      console.log('Tipo:', type);
      console.log('Opção:', option);
      
      const data = type === 'genre' ? top10_genre[option] : top10_provider[option];
      console.log('Dados carregados:', data);
      
      if (data && Array.isArray(data)) {
        setMovies(data);
      } else {
        console.log('Dados não encontrados ou formato inválido');
        setMovies([]);
      }
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  }, [type, option]);

  console.log('Filmes atuais:', movies);

  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Title>
          {isLoading 
            ? 'Carregando...' 
            : `Top 10 ${type === 'genre' ? 'de ' + option : 'no ' + option}`}
        </Title>
        
        {isLoading ? (
          <Subtitle>Buscando os melhores filmes para você...</Subtitle>
        ) : movies.length > 0 ? (
          <div className="flex flex-col items-center w-full px-4">
            {movies.map((movie) => (
              <MovieCard key={movie[0]}>
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w200${movie[11]}`}
                  alt={movie[4]}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150x225?text=Sem+imagem';
                  }}
                />
                <MovieInfo>
                  <MovieTitle>{movie[4]}</MovieTitle>
                  <MovieDescription>{movie[5]}</MovieDescription>
                  <MovieDetails>
                    <span>Nota: {(movie[9] + 0.2).toFixed(2)}</span>
                    <span>Lançamento: {new Date(movie[8]).getFullYear()}</span>
                  </MovieDetails>
                  <WatchButton 
                    provider={movie[2].charAt(0).toUpperCase() + movie[2].slice(1)}
                  />
                </MovieInfo>
              </MovieCard>
            ))}
          </div>
        ) : (
          <Subtitle>Não encontramos filmes para esta categoria.</Subtitle>
        )}
      </div>
      <Footer />
    </Background>
  );
} 