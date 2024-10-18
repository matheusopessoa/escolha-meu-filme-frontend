import React, { useContext } from 'react';
import Title from '../components/Title';
import Background from '../components/Background';
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
  const { setSelectedService, setSelectedGenres, selectedService  ,setMovies, theMovie, setTheMovie,  } = useContext(AppContext)
  const goHome = () => {
    setSelectedService(null);
    setSelectedGenres([]);
    setMovies({});
    setTheMovie([]);
    navigate('/');
  }
  return (
    <Background>
      <BackHome/>
      <Container>
        <Title>Obrigado!</Title>
        <Subtitle>Você selecionou o filme <strong>{theMovie[0]}</strong><br />No Streaming <strong>{selectedService}</strong></Subtitle>
        <br></br>
        <MovieImage src={theMovie[1]} alt={theMovie[0]} />
        <Subtitle>Aproveite seu filme e tenha uma boa sessão!</Subtitle>


        <Button onClick={() => goHome()}>Voltar ao Início</Button>
      </Container>
    </Background>
  );
};

export default ThankYouScreen;
