import { useState, useEffect } from 'react';
import Background from './components/Background';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Footer from './components/Footer';
import styled from 'styled-components';
import MenuSanduiche from './components/MenuSanduiche';
import Button from './components/Button';
import { top10_genre } from './utils/top10_genre';
import Header from './components/Header';
import WatchButton from '../components/WatchButton';
import GoogleAd from '../components/GoogleAd';

const MovieCard = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 15px auto;
  width: 95%;
  max-width: 1000px;
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

const GenreTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 4px;
  margin-bottom: 4px;
  display: inline-block;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export default function Aleatorio() {
  const [movie, setMovie] = useState(null);
  const [currentGenre, setCurrentGenre] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomMovie = () => {
    setIsLoading(true);
    try {
      // Pega todos os gêneros disponíveis
      const genres = Object.keys(top10_genre);
      
      // Escolhe um gênero aleatório
      const randomGenre = genres[Math.floor(Math.random() * genres.length)];
      
      // Pega a lista de filmes do gênero escolhido
      const genreMovies = top10_genre[randomGenre];
      
      // Escolhe um filme aleatório da lista
      const randomMovie = genreMovies[Math.floor(Math.random() * genreMovies.length)];
      
      setCurrentGenre(randomGenre);
      setMovie(randomMovie);
    } catch (error) {
      console.error('Erro ao buscar filme aleatório:', error);
      setMovie(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Title>Escolha Aleatória</Title>
        
        {isLoading ? (
          <Subtitle>Buscando um filme especial para você...</Subtitle>
        ) : movie ? (
          <div className="flex flex-col items-center w-full px-4">
            {/* Anúncio superior - banner */}
            <GoogleAd 
              adSlot="1234567890" 
              adFormat="horizontal"
              adLayout="in-article"
              adStyle={{ display: 'block', width: '100%', height: '90px' }}
            />
            
            <MovieCard>
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
                  <div>
                    <GenreTag>{currentGenre}</GenreTag>
                  </div>
                  <span>Nota: {(movie[9] + 0.2).toFixed(2)}</span>
                  <span>Lançamento: {new Date(movie[8]).getFullYear()}</span>
                  <span>Disponível no {movie[2].charAt(0).toUpperCase() + movie[2].slice(1)}</span>
                </MovieDetails>
                <WatchButton 
                  provider={movie[2].charAt(0).toUpperCase() + movie[2].slice(1)} 
                  movieTitle={movie[4]}
                />
              </MovieInfo>
            </MovieCard>

            {/* Anúncio inferior - retângulo */}
            <GoogleAd 
              adSlot="0987654321" 
              adFormat="rectangle"
              adLayout="in-article"
              adStyle={{ display: 'block', width: '300px', height: '250px' }}
            />
            
            <ButtonContainer>
              <Button onClick={fetchRandomMovie}>
                Escolher Outro Filme
              </Button>
            </ButtonContainer>
          </div>
        ) : (
          <Subtitle>Não foi possível encontrar um filme no momento.</Subtitle>
        )}
      </div>
      <Footer />
    </Background>
  );
} 