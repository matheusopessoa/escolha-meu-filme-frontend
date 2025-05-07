import { useState, useEffect } from 'react';
import Background from './components/Background';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Button from './components/Button';
import ButtonList from './components/ButtonList';
import PurpleButton from './components/PurpleButton';
import Footer from './components/Footer';
import './MainScreen.css';
import fetchMovies from './utils/fetch';
import styled from 'styled-components';
import Header from './components/Header';
import WatchButton from '../components/WatchButton';
import GoogleAd from '../components/GoogleAd';

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
  word-wrap: break-word; /* Permite quebra de palavras longas */
`;

const MovieDescription = styled.p`
  margin: 0 0 10px 0;
  font-size: 1rem;
  opacity: 0.9;
  word-wrap: break-word; /* Permite quebra de palavras longas */
`;

const MovieDetails = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  font-size: 0.9rem;
  opacity: 0.8;
  flex-wrap: wrap; /* Permite quebra de linha nos detalhes */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 15px;
  position: relative;
  z-index: 1;
`;

const AdContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 5px;
    height: 10px;
  }

  .adsbygoogle {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  min-height: calc(100vh - 300px);
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  width: 100%;
  padding: 20px;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 100px;
`;

const streamings = ['Netflix', 'Amazon', 'Disney', 'Max', 'Globoplay'];
const genres = ['Ação', 'Aventura', 'Comédia', 'Animação', 'Crime', 'Drama', 'Família', 'Fantasia', 'História', 'Horror', 'Musical', 'Mistério', 'Romance', 'Ficção Científica', 'Terror', 'Guerra', 'Faroeste'];

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px; /* Espaço para o footer */
`;

const MoviesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 80px 0 100px 0;
  width: 100%;
`;

export default function MainScreen() {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState('');
  const [style, setStyle] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [rollDown, setRollDown] = useState(false);

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

  const isGenreSelected = (genre) => selectedGenres.includes(genre);

  const handleBackToHome = () => {
    document.getElementById('top-of-page')?.scrollIntoView();
    setStep(1);
  };

  useEffect(() => {
    if (step === 4 && selectedGenres.length > 0 && rollDown === false) {
      const continueButton = document.getElementById('continue-button');
      if (continueButton) {
        continueButton.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
      setRollDown(true);
    }
  }, [step, selectedGenres]);

  useEffect(() => {
    if (step === 5) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const moviesData = await fetchMovies(provider, selectedGenres, style);
          const sortedMovies = [...moviesData].sort((a, b) => b[9] - a[9]);
          setMovies(sortedMovies);
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [step, provider, selectedGenres, style]);

  const renderAd = (slot, style) => {
    if (isLoading) {
      return null;
    }

    const hasRelevantContent = () => {
      switch (step) {
        case 1:
          return true;
        case 2:
          return streamings.length > 0;
        case 3:
          return true;
        case 4:
          return genres.length > 0;
        case 5:
          return movies.length > 0;
        default:
          return false;
      }
    };

    if (!hasRelevantContent()) {
      return null;
    }

    const isContentVisible = () => {
      const contentElement = document.querySelector(step === 5 ? '.movie-card' : '.centered-content');
      if (!contentElement) return false;

      const rect = contentElement.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    if (!isContentVisible()) {
      return null;
    }

    return (
      <AdContainer>
        <GoogleAd
          adSlot={slot}
          style={style}
          contentSelector={step === 5 ? '.movie-card' : '.centered-content'}
        />
      </AdContainer>
    );
  };

  return (
    <Background>
      <div id="top-of-page" />
      <Header />
      <MainContainer>
        {step === 1 && (
          <CenteredContent>
            <ContentWrapper>
              <Title>Escolha Meu Filme</Title>
              <Subtitle>Deixa com a gente: vamos encontrar o filme perfeito para você!</Subtitle>
              {renderAd("1234567890", { 
                display: 'block', 
                width: '100%', 
                height: '90px',
                maxHeight: '90px',
                overflow: 'hidden'
              })}
              <ButtonContainer>
                <Button onClick={() => setStep(2)}>Começar</Button>
              </ButtonContainer>
            </ContentWrapper>
          </CenteredContent>
        )}

        {step === 2 && (
          <CenteredContent>
            <ContentWrapper>
              <Title>Onde você quer assistir?</Title>
              <Subtitle>Escolha uma plataforma de streaming</Subtitle>
              {renderAd("2345678901", { 
                display: 'block', 
                width: '100%', 
                height: '90px',
                maxHeight: '90px',
                overflow: 'hidden'
              })}
              <div className='button-list-col'>
                {Array.from({ length: Math.ceil(streamings.length / 3) }, (_, rowIndex) => (
                  <div className='button-list-row' key={rowIndex}>
                    {streamings.slice(rowIndex * 3, rowIndex * 3 + 3).map((s) => (
                      <ButtonList
                        key={s}
                        onClick={() => {
                          setProvider(s.toLocaleLowerCase());
                          setStep(3);
                        }}
                        className="w-48 m-[5px]"
                      >
                        {s}
                      </ButtonList>
                    ))}
                  </div>
                ))}
              </div>
            </ContentWrapper>
          </CenteredContent>
        )}

        {step === 3 && (
          <CenteredContent>
            <ContentWrapper>
              <Title>Que tipo de filme você curte?</Title>
              <Subtitle>Prefere algo bem conhecido (Mainstream) ou um filme mais alternativo (Cult)?</Subtitle>
              {renderAd("3456789012", { 
                display: 'block', 
                width: '100%', 
                height: '90px',
                maxHeight: '90px',
                overflow: 'hidden'
              })}
              <div className='button-list-row'> 
                <Button onClick={() => {
                  setStyle(false);
                  setStep(4);
                }} className="w-48 m-[5px]">Mainstream</Button>
                <Button onClick={() => {
                  setStyle(true);
                  setStep(4);
                }} className="w-48 m-[5px]">Cult</Button>
              </div>
            </ContentWrapper>
          </CenteredContent>
        )}

        {step === 4 && (
          <CenteredContent>
            <ContentWrapper>
              <Title>Quais gêneros você prefere?</Title>
              <Subtitle>Escolha um ou dois para curtir seu próximo filme!</Subtitle>
              <div className="button-list-col">
                {Array.from({ length: Math.ceil(genres.length / 3) }, (_, rowIndex) => (
                  <div className="button-list-row" key={rowIndex}>
                    {genres.slice(rowIndex * 3, rowIndex * 3 + 3).map((g) => (
                      <ButtonList
                        key={g}
                        onClick={() => handleGenreClick(g)}
                        className="w-48 m-[5px]"
                        style={{
                          border: isGenreSelected(g) ? '2px solid #fff' : '',
                          background: isGenreSelected(g)
                            ? 'linear-gradient(225deg, #FFA500, #FF8C00)'
                            : '',
                        }}
                      >
                        {g}
                      </ButtonList>
                    ))}
                  </div>
                ))}
              </div>
              {selectedGenres.length > 0 && (
                <ButtonContainer>
                  <PurpleButton 
                    id='continue-button'
                    onClick={() => {
                      setStep(5);
                    }}
                    className="w-48"
                  >
                    Continuar
                  </PurpleButton>
                </ButtonContainer>
              )}
            </ContentWrapper>
          </CenteredContent>
        )}

        {step === 5 && (
          <MoviesContainer>
            <ContentWrapper>
              <Title>{isLoading ? 'Buscando filmes...' : 'Filmes recomendados'}</Title>
              {isLoading ? (
                <Subtitle>Aguarde enquanto encontramos algo perfeito para você</Subtitle>
              ) : movies.length > 0 ? (
                <>
                  {renderAd("4567890123", { 
                    display: 'block', 
                    width: '100%', 
                    height: '90px',
                    maxHeight: '90px',
                    overflow: 'hidden'
                  })}
                  {movies.map((movie) => (
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
                        <WatchButton 
                          provider={movie[2].charAt(0).toUpperCase() + movie[2].slice(1)}
                        />
                      </MovieInfo>
                    </MovieCard>
                  ))}
                  {renderAd("5678901234", { 
                    display: 'block', 
                    width: '300px', 
                    height: '250px',
                    maxHeight: '250px',
                    overflow: 'hidden'
                  })}
                  <ButtonContainer>
                    <PurpleButton
                      onClick={handleBackToHome}
                      className="w-48"
                    >
                      Voltar ao início
                    </PurpleButton>
                  </ButtonContainer>
                </>
              ) : (
                <div className='try-again-container'>
                  <Subtitle>Não encontramos filmes que correspondam aos critérios selecionados.</Subtitle>
                  <ButtonContainer>
                    <PurpleButton
                      onClick={() => setStep(4)}
                      className="w-48"
                    >
                      Tentar novamente
                    </PurpleButton>
                  </ButtonContainer>
                </div>
              )}
            </ContentWrapper>
          </MoviesContainer>
        )}
      </MainContainer>
      <Footer />
    </Background>
  );
}