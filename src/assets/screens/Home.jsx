import React, { useContext } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import Background from '../components/Background';
import Container from '../components/Container';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context'; // Importa o contexto para acessar os setters

const Home = () => {
  const navigate = useNavigate();
  const { setSelectedService, setSelectedGenres, setMovies, setTheMovie } = useContext(AppContext);

  const handleButtonClick = () => {
    // Limpa o localStorage
    localStorage.clear();

    // Reseta o contexto
    setSelectedService(null);
    setSelectedGenres([]);
    setMovies({});
    setTheMovie([]);

    // Navega para a próxima tela
    navigate('/streaming');
  };

  return (
    <Background>
      <Container>
        <Title home>Pare de escolher <br /> Comece a assistir</Title>
        <Subtitle>Deixe a parte chata conosco, apenas diga o que deseja</Subtitle>
        <Button onClick={handleButtonClick}>Escolha Meu Filme</Button>
      </Container>
    </Background>
  );
};

export default Home;
