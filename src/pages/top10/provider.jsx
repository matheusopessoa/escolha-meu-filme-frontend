import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Background from '../../assets/components/Background';
import Title from '../../assets/components/Title';
import Subtitle from '../../assets/components/Subtitle';
import Footer from '../../assets/components/Footer';
import BackButton from '../../components/BackButton';
import fetchMovies from '../../assets/utils/fetch';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
`;

const MovieCard = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 15px auto;
  width: 100%;
  max-width: 800px;
  gap: 10px;
  backdrop-filter: blur(5px);
  overflow: hidden;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  }
`;

const MoviePoster = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 120px;
    margin-bottom: 15px;
  }
`;

const MovieInfo = styled.div`
  flex: 1;
  color: white;

  @media (max-width: 768px) {
    width: 100%;
  }
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

const Top10Provider = () => {
  const { provider } = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const moviesData = await fetchMovies(provider.toLowerCase(), [], false);
        const sortedMovies = [...moviesData]
          .sort((a, b) => b[9] - a[9])
          .slice(0, 10);
        setMovies(sortedMovies);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [provider]);

  return (
    <Background>
      <Container>
        <BackButton />
        <Title>Top 10 {provider}</Title>
        <Subtitle>Os melhores filmes disponíveis na {provider}</Subtitle>

        {isLoading ? (
          <Subtitle>Carregando...</Subtitle>
        ) : (
          movies.map((movie) => (
            <MovieCard key={movie[0]}>
              <MoviePoster
                src={`https://image.tmdb.org/t/p/w200${movie[11]}`}
                alt={movie[4]}
              />
              <MovieInfo>
                <MovieTitle>{movie[4]}</MovieTitle>
                <MovieDescription>{movie[5]}</MovieDescription>
                <MovieDetails>
                  <span>Nota: {(movie[9] + 0.2).toFixed(2)}</span>
                  <span>Lançamento: {new Date(movie[8]).getFullYear()}</span>
                </MovieDetails>
              </MovieInfo>
            </MovieCard>
          ))
        )}

        <Footer 
          title={`Top 10 ${provider}`}
          content={`Os filmes mais populares e bem avaliados disponíveis na ${provider}.`}
          showDefault={false}
        />
      </Container>
    </Background>
  );
};

export default Top10Provider; 