import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import GoogleAd from '../components/GoogleAd';

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

const AdContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 5px auto;
  }

  .adsbygoogle {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 15px;
`;

export default function Top10() {
  const { type, option } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleBackToHome = () => {
    document.getElementById('top-of-page')?.scrollIntoView();
    navigate('/');
  };

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
      <div id="top-of-page" />
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-2">
        <Title>Top 10 {type === 'genre' ? 'por Gênero' : 'por Streaming'}</Title>
        <Subtitle>{option}</Subtitle>
        <AdContainer>
          <GoogleAd 
            adSlot="6789012345" 
            adFormat="horizontal"
            adLayout="in-article"
            adStyle={{ 
              display: 'block', 
              width: '100%', 
              height: '90px',
              maxHeight: '90px',
              overflow: 'hidden'
            }}
          />
        </AdContainer>
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
          <AdContainer>
            <GoogleAd 
              adSlot="7890123456" 
              adFormat="rectangle"
              adLayout="in-article"
              adStyle={{ 
                display: 'block', 
                width: '300px', 
                height: '250px',
                maxHeight: '250px',
                overflow: 'hidden'
              }}
            />
          </AdContainer>
          <ButtonContainer>
            <PurpleButton
              onClick={handleBackToHome}
              className="w-48"
            >
              Voltar ao início
            </PurpleButton>
          </ButtonContainer>
        </div>
      </div>
      <Footer />
    </Background>
  );
} 