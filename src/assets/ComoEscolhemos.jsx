import Background from './components/Background';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Footer from './components/Footer';
import styled from 'styled-components';
import Header from './components/Header';

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: white;
`;

const Section = styled.div`
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

const SectionTitle = styled.h2`
  color: #FFA500;
  margin-bottom: 15px;
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
`;

export default function ComoEscolhemos() {
  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Title>Como escolhemos os filmes</Title>
        
        <ContentContainer>
          <Section>
            <SectionTitle>Nossa Metodologia</SectionTitle>
            <Text>
              Utilizamos uma combinação de critérios para garantir que você tenha acesso aos melhores filmes disponíveis:
            </Text>
            <ul>
              <li>Avaliação do público e crítica</li>
              <li>Popularidade nas plataformas</li>
              <li>Relevância cultural</li>
              <li>Qualidade técnica e artística</li>
            </ul>
          </Section>

          <Section>
            <SectionTitle>Fontes de Dados</SectionTitle>
            <Text>
              Nossas recomendações são baseadas em dados do TMDB (The Movie Database), uma das maiores e mais confiáveis bases de dados de filmes do mundo.
            </Text>
          </Section>

          <Section>
            <SectionTitle>Personalização</SectionTitle>
            <Text>
              Nossos algoritmos consideram suas preferências de gênero e plataforma de streaming para oferecer recomendações cada vez mais precisas.
            </Text>
          </Section>

          <Section>
            <SectionTitle>Atualizações</SectionTitle>
            <Text>
              Nossa base de dados é atualizada constantemente para incluir os lançamentos mais recentes e as tendências do momento.
            </Text>
          </Section>
        </ContentContainer>
      </div>
      <Footer />
    </Background>
  );
} 