import React from 'react';
import Background from './components/Background';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Footer from './components/Footer';
import styled from 'styled-components';
import Header from './components/Header';
import GoogleAd from '../components/GoogleAd';

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 80px; /* Espaço para o botão fixo */
  }
`;

const Section = styled.section`
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled.h2`
  color: white;
  margin-bottom: 15px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

const AdContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  padding: 0 15px;

  @media (max-width: 768px) {
    margin: 15px auto;
  }
`;

export default function ComoEscolhemos() {
  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Title>Como Escolhemos os Filmes</Title>
        <AdContainer>
          <GoogleAd 
            adSlot="8901234567" 
            adFormat="horizontal"
            adLayout="in-article"
            adStyle={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>
        <ContentContainer>
          <Section>
            <SectionTitle>Nossa Metodologia</SectionTitle>
            <Paragraph>
              No Escolha Meu Filme, utilizamos uma combinação de dados do TMDB (The Movie Database) e algoritmos personalizados para selecionar os melhores filmes para você. Nossa metodologia é baseada em vários fatores importantes:
            </Paragraph>
            <Paragraph>
              1. <strong>Nota do TMDB:</strong> Consideramos a avaliação geral dos usuários do TMDB, que é uma das maiores bases de dados de filmes do mundo.
            </Paragraph>
            <Paragraph>
              2. <strong>Número de Votos:</strong> Damos mais peso aos filmes que têm um número significativo de avaliações, garantindo que as notas sejam mais confiáveis.
            </Paragraph>
            <Paragraph>
              3. <strong>Data de Lançamento:</strong> Consideramos tanto filmes clássicos quanto lançamentos recentes, mas damos um peso especial aos filmes mais recentes para manter o catálogo atualizado.
            </Paragraph>
          </Section>

          <AdContainer>
            <GoogleAd 
              adSlot="9012345678" 
              adFormat="rectangle"
              adLayout="in-article"
              adStyle={{ display: 'block', width: '300px', height: '250px', margin: '20px auto' }}
            />
          </AdContainer>

          <Section>
            <SectionTitle>Filtros e Preferências</SectionTitle>
            <Paragraph>
              Nossa plataforma permite que você personalize sua busca de várias maneiras:
            </Paragraph>
            <Paragraph>
              1. <strong>Streaming:</strong> Você pode escolher em qual plataforma de streaming deseja assistir, incluindo Netflix, Amazon Prime, Disney+, Max e Globoplay.
            </Paragraph>
            <Paragraph>
              2. <strong>Gêneros:</strong> Oferecemos uma ampla variedade de gêneros, desde ação e comédia até drama e ficção científica.
            </Paragraph>
            <Paragraph>
              3. <strong>Estilo:</strong> Você pode escolher entre filmes mais populares (mainstream) ou filmes mais alternativos (cult).
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Atualização Constante</SectionTitle>
            <Paragraph>
              Nosso banco de dados é atualizado regularmente para incluir:
            </Paragraph>
            <Paragraph>
              1. <strong>Novos Lançamentos:</strong> Adicionamos novos filmes assim que eles ficam disponíveis nas plataformas de streaming.
            </Paragraph>
            <Paragraph>
              2. <strong>Mudanças nas Plataformas:</strong> Atualizamos constantemente a disponibilidade dos filmes nas diferentes plataformas.
            </Paragraph>
            <Paragraph>
              3. <strong>Novas Avaliações:</strong> As notas dos filmes são atualizadas em tempo real conforme novos usuários fazem suas avaliações.
            </Paragraph>
          </Section>
        </ContentContainer>
      </div>
      <Footer />
    </Background>
  );
} 