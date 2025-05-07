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

export default function TermosDeUso() {
  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Title>Termos de Uso</Title>
        <AdContainer>
          <GoogleAd 
            adSlot="0123456789" 
            adFormat="horizontal"
            adLayout="in-article"
            adStyle={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>
        <ContentContainer>
          <Section>
            <SectionTitle>1. Aceitação dos Termos</SectionTitle>
            <Paragraph>
              Ao acessar e usar o Escolha Meu Filme, você concorda em cumprir estes termos de uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso serviço.
            </Paragraph>
          </Section>

          <AdContainer>
            <GoogleAd 
              adSlot="1234567890" 
              adFormat="rectangle"
              adLayout="in-article"
              adStyle={{ display: 'block', width: '300px', height: '250px', margin: '20px auto' }}
            />
          </AdContainer>

          <Section>
            <SectionTitle>2. Uso do Serviço</SectionTitle>
            <Paragraph>
              O Escolha Meu Filme é um serviço gratuito que ajuda você a encontrar filmes para assistir. Nós:
            </Paragraph>
            <Paragraph>
              1. Fornecemos recomendações personalizadas de filmes
            </Paragraph>
            <Paragraph>
              2. Mostramos informações sobre disponibilidade em plataformas de streaming
            </Paragraph>
            <Paragraph>
              3. Exibimos anúncios para manter o serviço gratuito
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>3. Privacidade e Dados</SectionTitle>
            <Paragraph>
              Coletamos e utilizamos dados para:
            </Paragraph>
            <Paragraph>
              1. Melhorar nossas recomendações
            </Paragraph>
            <Paragraph>
              2. Personalizar sua experiência
            </Paragraph>
            <Paragraph>
              3. Exibir anúncios relevantes
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>4. Anúncios</SectionTitle>
            <Paragraph>
              Utilizamos o Google AdSense para exibir anúncios. Estes anúncios:
            </Paragraph>
            <Paragraph>
              1. São personalizados com base em seus interesses
            </Paragraph>
            <Paragraph>
              2. Ajudam a manter o serviço gratuito
            </Paragraph>
            <Paragraph>
              3. Seguem as políticas do Google AdSense
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>5. Limitações de Responsabilidade</SectionTitle>
            <Paragraph>
              O Escolha Meu Filme:
            </Paragraph>
            <Paragraph>
              1. Não garante a disponibilidade contínua do serviço
            </Paragraph>
            <Paragraph>
              2. Não se responsabiliza por decisões tomadas com base em nossas recomendações
            </Paragraph>
            <Paragraph>
              3. Não garante a precisão absoluta das informações sobre disponibilidade em streaming
            </Paragraph>
          </Section>
        </ContentContainer>
      </div>
      <Footer />
    </Background>
  );
} 