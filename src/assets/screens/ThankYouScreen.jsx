import React from 'react';
import Title from '../components/Title';
import Background2 from '../components/Background2';
import Container from '../components/Container';
import Button from '../components/Button';
import styled from 'styled-components';

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
      <Container>
        <Title>Obrigado!</Title>
        <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
          Você selecionou o filme <strong>{movie.title}</strong>.
        </p>
        <br></br>

        {/* Exibindo o poster do filme */}
        <MovieImage src={movie.posterUrl} alt={movie.title} />

        <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
          Aproveite seu filme e tenha uma boa sessão!
        </p>

        <Button onClick={() => window.location.reload()}>Voltar ao Início</Button>
      </Container>
    </Background2>
  );
};

export default ThankYouScreen;
