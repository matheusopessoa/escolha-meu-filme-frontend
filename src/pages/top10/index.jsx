import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Background from '../../assets/components/Background';
import Title from '../../assets/components/Title';
import Subtitle from '../../assets/components/Subtitle';
import Button from '../../assets/components/Button';
import Footer from '../../assets/components/Footer';
import BackButton from '../../components/BackButton';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
`;

const genres = [
  'Ação', 'Aventura', 'Comédia', 'Animação', 'Crime', 'Drama', 
  'Família', 'Fantasia', 'História', 'Horror', 'Musical', 'Mistério', 
  'Romance', 'Ficção Científica', 'Terror', 'Guerra', 'Faroeste'
];

const providers = ['Netflix', 'Amazon', 'Disney', 'Max', 'Globoplay'];

const Top10 = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <Container>
        <BackButton />
        <Title>Top 10 Filmes</Title>
        <Subtitle>Descubra os melhores filmes por gênero ou plataforma</Subtitle>

        <Section>
          <h2>Por Gênero</h2>
          <ButtonGrid>
            {genres.map((genre) => (
              <Button
                key={genre}
                onClick={() => navigate(`/top10/genre/${genre}`)}
              >
                {genre}
              </Button>
            ))}
          </ButtonGrid>
        </Section>

        <Section>
          <h2>Por Plataforma</h2>
          <ButtonGrid>
            {providers.map((provider) => (
              <Button
                key={provider}
                onClick={() => navigate(`/top10/provider/${provider}`)}
              >
                {provider}
              </Button>
            ))}
          </ButtonGrid>
        </Section>

        <Footer 
          title="Top 10 Filmes"
          content="Descubra os filmes mais populares e bem avaliados em cada gênero e plataforma."
          showDefault={false}
        />
      </Container>
    </Background>
  );
};

export default Top10; 