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
  title: 'O Papel da Crítica Cinematográfica',
  subtitle: 'Como a análise de filmes influencia a indústria e o público',
  date: '5 de Março, 2025',
  content: `
    <p>
      A crítica cinematográfica desempenha um papel fundamental na indústria do cinema, 
      servindo como ponte entre os filmes e o público. Além de informar e orientar os 
      espectadores, a crítica também influencia a evolução da arte cinematográfica.
    </p>

    <h2>O Que é Crítica Cinematográfica?</h2>
    <p>
      A crítica cinematográfica envolve:
    </p>
    <ul>
      <li>Análise técnica e artística</li>
      <li>Contextualização histórica</li>
      <li>Avaliação de performances</li>
      <li>Discussão de temas e mensagens</li>
    </ul>

    <h2>Impacto na Indústria</h2>
    <p>
      A crítica tem influência significativa:
    </p>
    <ul>
      <li>Formação de opinião pública</li>
      <li>Influência no sucesso comercial</li>
      <li>Reconhecimento de talentos</li>
      <li>Evolução da linguagem cinematográfica</li>
    </ul>

    <h2>O Futuro da Crítica</h2>
    <p>
      Com as mudanças na indústria, a crítica também evolui:
    </p>
    <ul>
      <li>Plataformas digitais</li>
      <li>Crítica colaborativa</li>
      <li>Análise em tempo real</li>
      <li>Novos formatos de discussão</li>
    </ul>
  `
};

export default function Post5() {
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