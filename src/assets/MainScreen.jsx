import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader2, Film, Star, Calendar } from 'lucide-react';
import Layout from '../components/Layout';
import WatchButton from '../components/WatchButton';
import fetchMovies from './utils/fetch';

// Componentes do Shadcn/UI estilizados com styled-components
const Card = styled.div`
  background: rgba(31, 41, 55, 0.95);
  border-radius: 10px;
  border: 1px solid rgba(75, 85, 99, 0.4);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  background: ${props => props.isPurple ? 'linear-gradient(225deg, #DC2626, #991B1B)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.isPurple ? 'linear-gradient(225deg, #B91C1C, #7F1D1D)' : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const FilterSection = styled(Card)`
  padding: 1.5rem;
  height: fit-content;
  background: rgba(31, 41, 55, 0.95);
  backdrop-filter: blur(10px);
`;

const FilterTitle = styled.h2`
  color: white;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  background: rgba(55, 65, 81, 0.8);
  border: 1px solid rgba(75, 85, 99, 0.4);
  border-radius: 6px;
  color: white;
  margin-bottom: 1rem;
`;

const GenreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const GenreButton = styled(Button)`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  background: ${props => props.selected ? 'linear-gradient(225deg, #DC2626, #991B1B)' : 'rgba(55, 65, 81, 0.8)'};

  &:hover {
    background: ${props => props.selected ? 'linear-gradient(225deg, #B91C1C, #7F1D1D)' : 'rgba(75, 85, 99, 0.9)'};
  }
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const MovieCard = styled(Card)`
  overflow: hidden;
  background: rgba(31, 41, 55, 0.95);
  backdrop-filter: blur(10px);
`;

const MovieContent = styled.div`
  padding: 1.5rem;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MovieTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const MovieDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
`;

const Hint = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const streamings = ['Netflix', 'Amazon', 'Disney', 'Max', 'Globoplay'];
const genres = ['Ação', 'Aventura', 'Comédia', 'Animação', 'Crime', 'Drama', 'Família', 'Fantasia', 'História', 'Horror', 'Musical', 'Mistério', 'Romance', 'Ficção Científica', 'Terror', 'Guerra', 'Faroeste'];

export default function MainScreen() {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState('');
  const [style, setStyle] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleGenreClick = (genre) => {
    setSelectedGenres((prev) => {
      if (prev.includes(genre)) {
        return prev.filter((g) => g !== genre);
      }
      if (prev.length < 2) {
        return [...prev, genre];
      }
      return [...prev.slice(1), genre];
    });
  };

  const handleSearch = async () => {
    if (!provider || selectedGenres.length === 0) return;

    setIsLoading(true);
    try {
      const moviesData = await fetchMovies(provider, selectedGenres, style === 'cult');
      setMovies(moviesData);
      setStep(5);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Container>
        <ContentWrapper>
          <Header>
            <Subtitle>Encontre o filme perfeito para você assistir hoje!</Subtitle>
          </Header>

          <Grid>
            <FilterSection>
              <FilterTitle>Filtros</FilterTitle>
              
              <FilterGroup>
                <Label>Plataforma de Streaming</Label>
                <Select 
                  value={provider} 
                  onChange={(e) => setProvider(e.target.value)}
                >
                  <option value="">Selecione uma plataforma</option>
                  {streamings.map((s) => (
                    <option key={s} value={s.toLowerCase()}>{s}</option>
                  ))}
                </Select>
              </FilterGroup>

              <FilterGroup>
                <Label>Estilo</Label>
                <Select 
                  value={style} 
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option value="">Selecione um estilo</option>
                  <option value="mainstream">Mainstream</option>
                  <option value="cult">Cult</option>
                </Select>
                <Hint>
                  <strong>Mainstream:</strong> filmes populares e famosos. <br />
                  <strong>Cult:</strong> filmes alternativos, geralmente mais artísticos ou com fãs fiéis.
                </Hint>
              </FilterGroup>

              <FilterGroup>
                <Label>Gêneros (máximo 2)</Label>
                <GenreGrid>
                  {genres.map((genre) => (
                    <GenreButton
                      key={genre}
                      selected={selectedGenres.includes(genre)}
                      onClick={() => handleGenreClick(genre)}
                      disabled={!selectedGenres.includes(genre) && selectedGenres.length >= 2}
                    >
                      {genre}
                    </GenreButton>
                  ))}
                </GenreGrid>
              </FilterGroup>

              <Button
                isPurple
                onClick={handleSearch}
                disabled={!provider || selectedGenres.length === 0 || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Buscando...
                  </>
                ) : (
                  <>
                    <Film size={20} />
                    Encontrar Filmes
                  </>
                )}
              </Button>
            </FilterSection>

            <div>
              {movies.length > 0 ? (
                <MovieGrid>
                  {movies.map((movie) => (
                    <MovieCard key={movie[0]}>
                      <MoviePoster
                        src={`https://image.tmdb.org/t/p/w500${movie[11]}`}
                        alt={movie[4]}
                      />
                      <MovieContent>
                        <MovieTitle>{movie[4]}</MovieTitle>
                        <MovieDescription>{movie[5]}</MovieDescription>
                        <MovieDetails>
                          <span className="flex items-center">
                            <Star size={16} className="text-yellow-500 mr-1" />
                            {(movie[9] + 0.2).toFixed(1)}
                          </span>
                          <span className="flex items-center">
                            <Calendar size={16} className="mr-1" />
                            {new Date(movie[8]).getFullYear()}
                          </span>
                        </MovieDetails>
                        <WatchButton 
                          provider={movie[2].charAt(0).toUpperCase() + movie[2].slice(1)}
                        />
                      </MovieContent>
                    </MovieCard>
                  ))}
                </MovieGrid>
              ) : (
                <Card className="p-12 text-center">
                  <Film size={48} className="mx-auto mb-4 text-gray-600" />
                  <h3 className="text-white text-xl mb-2">Nenhum filme encontrado</h3>
                  <p className="text-gray-400">
                    Selecione uma plataforma e pelo menos um gênero para começar
                  </p>
                </Card>
              )}
            </div>
          </Grid>
        </ContentWrapper>
      </Container>
    </Layout>
  );
}