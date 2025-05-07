import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../components/Background';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import PurpleButton from '../components/PurpleButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GoogleAd from '../../components/GoogleAd';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PostContent = styled.article`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin: 20px 0;
`;

const PostDate = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const PostText = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;

  p {
    margin-bottom: 20px;
  }

  h2 {
    color: #FFA500;
    font-size: 1.8rem;
    margin: 30px 0 20px;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const AdContainer = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
`;

export default function Post1() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Simulando carregamento do conteúdo
    const loadContent = async () => {
      try {
        // Aqui você pode fazer uma chamada API real
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulando delay
        setContent({
          title: 'O Impacto do Streaming no Cinema',
          subtitle: 'Como as plataformas de streaming estão transformando a indústria cinematográfica',
          date: '15 de Março, 2024',
          content: `
            <p>
              A revolução do streaming transformou completamente a forma como consumimos conteúdo audiovisual. 
              Desde o surgimento da Netflix até os dias atuais, a indústria do cinema passou por mudanças 
              significativas que redefiniram não apenas como assistimos filmes, mas também como eles são 
              produzidos e distribuídos.
            </p>

            <h2>Mudanças no Modelo de Negócios</h2>
            <p>
              O modelo tradicional de distribuição cinematográfica, que dependia fortemente das salas de 
              cinema e da venda de DVDs, foi profundamente impactado pelo streaming. As plataformas de 
              streaming oferecem:
            </p>
            <ul>
              <li>Acesso instantâneo a um vasto catálogo de filmes</li>
              <li>Conteúdo original exclusivo</li>
              <li>Flexibilidade de horários para assistir</li>
              <li>Preços mais acessíveis que o modelo tradicional</li>
            </ul>

            <h2>Impacto na Produção Cinematográfica</h2>
            <p>
              As plataformas de streaming não apenas mudaram a forma de distribuição, mas também 
              influenciaram a produção de filmes. Com orçamentos generosos e liberdade criativa, 
              serviços como Netflix, Amazon Prime e Disney+ têm atraído grandes diretores e atores, 
              resultando em produções de alta qualidade que competem diretamente com os grandes 
              estúdios de Hollywood.
            </p>

            <h2>Desafios e Oportunidades</h2>
            <p>
              Apesar dos benefícios, o streaming também apresenta desafios para a indústria:
            </p>
            <ul>
              <li>Competição acirrada entre plataformas</li>
              <li>Questões de direitos autorais e royalties</li>
              <li>Impacto nas salas de cinema tradicionais</li>
              <li>Necessidade de adaptação dos modelos de negócio</li>
            </ul>

            <p>
              No entanto, essas mudanças também abrem novas oportunidades para cineastas independentes 
              e produtores, que agora têm mais canais para distribuir seu trabalho e alcançar um 
              público global.
            </p>

            <h2>O Futuro do Cinema</h2>
            <p>
              O futuro do cinema parece ser uma coexistência entre o streaming e as salas de cinema 
              tradicionais. Enquanto o streaming oferece conveniência e acessibilidade, as salas de 
              cinema continuam oferecendo uma experiência única e imersiva que não pode ser replicada 
              em casa.
            </p>
          `
        });
      } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
  }, []);

  const handleBackToHome = () => {
    const header = document.querySelector('header');
    header?.scrollIntoView({ behavior: 'smooth' });
    navigate('/');
  };

  if (isLoading) {
    return (
      <Background>
        <Header />
        <PostContainer>
          <LoadingContainer>
            Carregando conteúdo...
          </LoadingContainer>
        </PostContainer>
        <Footer />
      </Background>
    );
  }

  return (
    <Background>
      <Header />
      <PostContainer>
        <Title>{content.title}</Title>
        <Subtitle>{content.subtitle}</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>{content.date}</PostDate>
          <PostText dangerouslySetInnerHTML={{ __html: content.content }} />
        </PostContent>

        <AdContainer>
          <GoogleAd
            adSlot="9012345678"
            style={{ display: 'block', width: '300px', height: '250px' }}
          />
        </AdContainer>

        <ButtonContainer>
          <PurpleButton onClick={handleBackToHome}>
            Voltar ao início
          </PurpleButton>
        </ButtonContainer>
      </PostContainer>
      <Footer />
    </Background>
  );
} 