import React from 'react';
import Title from '../components/Title';
import Background2 from '../components/Background2';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';
import Subtitle from '../components/Subtitle';
import BackHome from '../components/BackHome';

// Estilizando a imagem do filme
const MovieImage = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ThankYouScreen = ({ movie }) => {
  return (
    <Background2>
      <BackHome/>
      <Container>
        <Title>Obrigado!</Title>
        <Subtitle>Você selecionou o filme <strong>{movie.title}</strong></Subtitle>
        <br></br>
        <MovieImage src={movie.posterUrl} alt={movie.title} />
        <Subtitle>Aproveite seu filme e tenha uma boa sessão!</Subtitle>


        <Button onClick={() => window.location.reload()}>Voltar ao Início</Button>
      </Container>
    </Background2>
  );
};

export default ThankYouScreen;
