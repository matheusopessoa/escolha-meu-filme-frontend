import { useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
import ButtonList from '../components/ButtonList';
import PurpleButton from '../components/PurpleButton';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Header from '../components/Header';
import GoogleAd from '../../components/GoogleAd';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: white;
`;

const PostContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 30px;
  margin: 20px 0;
  backdrop-filter: blur(5px);
  line-height: 1.6;

  h2 {
    color: #FFA500;
    margin: 30px 0 15px;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
`;

const AdContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 10px auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 5px auto;
  }

  .adsbygoogle {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 15px;
`;

// Conteúdo estático do post
const postContent = {
  title: 'O Renascimento do Cinema de Arte',
  subtitle: 'Como o cinema de arte está conquistando novas audiências',
  date: '1 de Março, 2025',
  content: `
    <p>
      O cinema de arte está passando por um renascimento significativo, atraindo novas 
      audiências e ganhando reconhecimento mainstream. Filmes que antes eram considerados 
      nicho estão agora alcançando um público mais amplo, graças a uma combinação de fatores 
      que incluem streaming, redes sociais e uma crescente apreciação por narrativas 
      complexas.
    </p>

    <h2>O Que Define o Cinema de Arte</h2>
    <p>
      O cinema de arte se caracteriza por:
    </p>
    <ul>
      <li>Foco em narrativas experimentais</li>
      <li>Exploração de temas complexos</li>
      <li>Estética visual única</li>
      <li>Liberdade criativa</li>
    </ul>

    <h2>Mudanças no Público</h2>
    <p>
      O público do cinema de arte está evoluindo:
    </p>
    <ul>
      <li>Maior interesse em filmes internacionais</li>
      <li>Busca por narrativas diferentes</li>
      <li>Apreciação por estilos únicos</li>
      <li>Engajamento em discussões online</li>
    </ul>

    <h2>O Papel do Streaming</h2>
    <p>
      Plataformas de streaming têm sido fundamentais para o renascimento do cinema de arte:
    </p>
    <ul>
      <li>Acesso facilitado a filmes internacionais</li>
      <li>Recomendações personalizadas</li>
      <li>Conteúdo curado</li>
      <li>Produções originais arrojadas</li>
    </ul>
  `
};

export default function Post7() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    const header = document.querySelector('header');
    header?.scrollIntoView({ behavior: 'smooth' });
    navigate('/');
  };

  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-2">
        <Title>{postContent.title}</Title>
        <Subtitle>{postContent.subtitle}</Subtitle>
        <AdContainer>
          <GoogleAd 
            adSlot="6789012345" 
            adFormat="horizontal"
            adLayout="in-article"
            adStyle={{ 
              display: 'block', 
              width: '100%', 
              height: '90px',
              maxHeight: '90px',
              overflow: 'hidden'
            }}
          />
        </AdContainer>
        <PostContainer>
          <PostContent dangerouslySetInnerHTML={{ __html: postContent.content }} />
          <AdContainer>
            <GoogleAd 
              adSlot="7890123456" 
              adFormat="rectangle"
              adLayout="in-article"
              adStyle={{ 
                display: 'block', 
                width: '300px', 
                height: '250px',
                maxHeight: '250px',
                overflow: 'hidden'
              }}
            />
          </AdContainer>
          <ButtonContainer>
            <PurpleButton
              onClick={handleBackToHome}
              className="w-48"
            >
              Voltar ao início
            </PurpleButton>
          </ButtonContainer>
        </PostContainer>
      </div>
      <Footer />
    </Background>
  );
} 