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
  title: 'A Evolução dos Efeitos Especiais',
  subtitle: 'Uma análise sobre como os efeitos especiais evoluíram ao longo dos anos',
  date: '12 de Março, 2025',
  content: `
    <p>
      Os efeitos especiais têm sido uma parte fundamental do cinema desde seus primórdios. 
      Ao longo dos anos, vimos uma evolução impressionante nas técnicas e tecnologias utilizadas 
      para criar experiências visuais cada vez mais imersivas e realistas.
    </p>

    <h2>Os Primeiros Anos</h2>
    <p>
      No início do cinema, os efeitos especiais eram basicamente práticos e mecânicos. 
      Técnicas como stop-motion, maquetes e truques de câmera eram as principais ferramentas 
      para criar ilusões visuais. Alguns marcos importantes incluem:
    </p>
    <ul>
      <li>O uso de maquetes em "Metropolis" (1927)</li>
      <li>Stop-motion em "King Kong" (1933)</li>
      <li>Truques de câmera em "O Mágico de Oz" (1939)</li>
    </ul>

    <h2>A Era Digital</h2>
    <p>
      A revolução digital transformou completamente a indústria dos efeitos especiais. 
      Com o advento da computação gráfica, novas possibilidades surgiram:
    </p>
    <ul>
      <li>CGI (Computer Generated Imagery)</li>
      <li>Motion Capture</li>
      <li>Composição Digital</li>
      <li>Simulação de Física Realista</li>
    </ul>

    <h2>O Presente e o Futuro</h2>
    <p>
      Hoje, os efeitos especiais são uma combinação sofisticada de técnicas práticas e digitais. 
      As tendências atuais incluem:
    </p>
    <ul>
      <li>Realidade Virtual e Aumentada</li>
      <li>Inteligência Artificial na geração de efeitos</li>
      <li>Captura de Performance em Tempo Real</li>
      <li>Efeitos Visuais Fotorrealistas</li>
    </ul>
  `
};

export default function Post2() {
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