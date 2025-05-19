import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import PurpleButton from './components/PurpleButton';
import { fetchTop10ByGenre } from './utils/top10_genre';
import { fetchTop10ByProvider } from './utils/top10_provider';
import Layout from '../components/Layout';
import WatchButton from '../components/WatchButton';
import SeoHead from './components/SeoHead';

const Top10Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 80vh;
  padding: 20px;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  gap: 10px;
  backdrop-filter: blur(10px);
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MovieTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const MovieDescription = styled.p`
  font-size: 0.9rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const LoadingContainer = styled.div`
  font-size: 1.2rem;
  color: white;
  text-align: center;
`;

const ErrorContainer = styled.div`
  font-size: 1rem;
  color: red;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
`;

const Top10 = () => {
  const { type, option } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [titleText, setTitleText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        let top10Movies;
        if (type === 'genre') {
          top10Movies = await fetchTop10ByGenre(option);
          setTitleText(`Top 10 ${option}`);
        } else if (type === 'streaming') {
          top10Movies = await fetchTop10ByProvider(option);
          setTitleText(`Top 10 ${option}`);
        } else {
          throw new Error('Tipo inválido');
        }
        setMovies(top10Movies);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [type, option]);

  const getPageTitle = () => {
    const typeText = type === 'genre' ? 'Gênero' : 'Plataforma';
    return `Top 10 Filmes por ${typeText}: ${option} | Escolha Meu Filme`;
  };

  const getPageDescription = () => {
    const typeText = type === 'genre' ? 'gênero' : 'plataforma';
    return `Descubra os 10 melhores filmes de ${option} na ${typeText}. Lista atualizada com as melhores recomendações para você assistir hoje.`;
  };

  const getPageKeywords = () => {
    const baseKeywords = 'top 10 filmes, melhores filmes, ranking filmes';
    
    if (type === 'genre') {
      return `${baseKeywords}, filmes de ${option}, melhores filmes de ${option}, top filmes ${option}, filmes ${option} 2024, recomendação filmes ${option}, ${option} filmes mais populares, ${option} filmes mais assistidos, ${option} filmes bem avaliados, filmes do gênero ${option}`;
    } else if (type === 'streaming') {
      return `${baseKeywords}, filmes ${option}, melhores filmes ${option}, top filmes ${option}, lançamentos ${option}, filmes populares ${option}, filmes novos ${option}, filmes exclusivos ${option}, catálogo ${option}, streaming ${option}, assistir filmes ${option}`;
    }
    
    return baseKeywords;
  };

  return (
    <Layout>
      <SeoHead
        title={getPageTitle()}
        description={getPageDescription()}
        type="article"
        modifiedTime={new Date().toISOString()}
        section="Top 10"
        keywords={getPageKeywords()}
      />
      <Top10Container>
        <TitleContainer>
          <Title>{isLoading ? 'Carregando...' : titleText}</Title>
          <Subtitle>Os melhores filmes escolhidos para você</Subtitle>
        </TitleContainer>
        
        {isLoading ? (
          <LoadingContainer>Buscando os melhores filmes...</LoadingContainer>
        ) : error ? (
          <ErrorContainer>
            <p>Erro ao buscar filmes: {error}</p>
            <PurpleButton onClick={() => navigate('/')}>Voltar ao início</PurpleButton>
          </ErrorContainer>
        ) : (
          <>
            <MovieGrid>
              {movies.map((movie) => (
                <MovieCard key={movie[0]}>
                  <MoviePoster src={`https://image.tmdb.org/t/p/w342${movie[11]}`} alt={movie[4]} />
                  <MovieInfo>
                    <MovieTitle>{movie[4]}</MovieTitle>
                    <MovieDescription>{movie[5].substring(0, 100)}...</MovieDescription>
                    <MovieDetails>
                      <span>Nota: {(movie[9] + 0.2).toFixed(2)}</span>
                      <span>Ano: {new Date(movie[8]).getFullYear()}</span>
                      <WatchButton provider={movie[2].charAt(0).toUpperCase() + movie[2].slice(1)} />
                    </MovieDetails>
                  </MovieInfo>
                </MovieCard>
              ))}
            </MovieGrid>
            <ButtonContainer>
              <PurpleButton onClick={() => navigate('/')}>
                Voltar à página inicial
              </PurpleButton>
            </ButtonContainer>
          </>
        )}
      </Top10Container>
    </Layout>
  );
};

export default Top10;
