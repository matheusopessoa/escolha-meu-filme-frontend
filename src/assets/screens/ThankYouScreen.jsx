import React, { useContext } from 'react';
import Title from '../components/Title';
import Background2 from '../components/Background2';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';
import Subtitle from '../components/Subtitle';
import BackHome from '../components/BackHome';
import { AppContext } from '../../context';
import { useNavigate } from 'react-router-dom';

// Estilizando a imagem do filme
const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ThankYouScreen = () => {
  const navigate = useNavigate()
  const { setSelectedService, setSelectedGenres, setMovies, theMovie, setTheMovie,  } = useContext(AppContext)
  const goHome = () => {
    setSelectedService(null);
    setSelectedGenres([]);
    setMovies({});
    setTheMovie([]);
    navigate('/');
  }
  return (
    <Background2>
      <BackHome/>
      <Container>
        <Title>Obrigado!</Title>
        <Subtitle>Você selecionou o filme <strong>{theMovie[0]}</strong></Subtitle>
        <br></br>
        <MovieImage src={theMovie[1]} alt={theMovie[0]} />
        <Subtitle>Aproveite seu filme e tenha uma boa sessão!</Subtitle>


        <Button onClick={() => goHome()}>Voltar ao Início</Button>
      </Container>
    </Background2>
  );
};

export default ThankYouScreen;
