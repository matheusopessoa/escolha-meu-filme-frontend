import React from 'react';
import styled from 'styled-components';
import PurpleButton from './components/PurpleButton';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const ComoEscolhemosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 30px;
  max-width: 800px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
`;

export default function ComoEscolhemos() {
  return (
    <Layout>
      <ComoEscolhemosContainer>
        <Title>Como Escolhemos os Filmes</Title>
        
        <Section>
          <SectionTitle>Nossa Metodologia</SectionTitle>
          <Paragraph>
            Na Escolha Meu Filme, nossa missão é ajudar você a encontrar o filme perfeito para assistir, independentemente do seu humor ou preferência. Nosso processo de seleção e recomendação é cuidadosamente elaborado para oferecer sugestões relevantes e de qualidade.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Seleção de Filmes</SectionTitle>
          <Paragraph>
            Nossa equipe de especialistas em cinema vasculha diversas fontes, incluindo plataformas de streaming, críticas de especialistas e avaliações do público, para identificar os filmes mais promissores.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Critérios de Avaliação</SectionTitle>
          <Paragraph>
            Consideramos uma variedade de fatores ao avaliar um filme, incluindo:
          </Paragraph>
          <ul>
            <li>Qualidade da história e roteiro</li>
            <li>Atuações e direção</li>
            <li>Relevância cultural e impacto</li>
            <li>Originalidade e inovação</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>Recomendações Personalizadas</SectionTitle>
          <Paragraph>
            Com base em seus gostos e histórico de visualização, nosso algoritmo de recomendação sugere filmes que você provavelmente irá adorar. Levamos em consideração seus gêneros favoritos, atores preferidos e plataformas de streaming que você utiliza.
          </Paragraph>
        </Section>
        
        <ButtonContainer>
          <PurpleButton as={Link} to="/">
            Voltar para a página inicial
          </PurpleButton>
        </ButtonContainer>
      </ComoEscolhemosContainer>
    </Layout>
  );
}
