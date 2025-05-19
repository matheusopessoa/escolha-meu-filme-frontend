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
  title: 'A Evolução dos Gêneros Cinematográficos',
  subtitle: 'Como os gêneros do cinema se transformaram ao longo do tempo',
  date: '28 de Fevereiro, 2025',
  content: `
    <p>
      Os gêneros cinematográficos estão em constante evolução, refletindo mudanças sociais, 
      culturais e tecnológicas. O que antes eram categorias bem definidas agora se misturam 
      e se transformam, criando novas formas de contar histórias e expressar ideias.
    </p>

    <h2>Gêneros Clássicos</h2>
    <p>
      Os gêneros tradicionais incluem:
    </p>
    <ul>
      <li>Drama</li>
      <li>Comédia</li>
      <li>Ação</li>
      <li>Romance</li>
      <li>Ficção científica</li>
    </ul>

    <h2>Fusão de Gêneros</h2>
    <p>
      A mistura de gêneros tem criado novas categorias:
    </p>
    <ul>
      <li>Drama de ação</li>
      <li>Comédia romântica</li>
      <li>Thriller psicológico</li>
      <li>Drama histórico</li>
      <li>Ficção científica social</li>
    </ul>

    <h2>Influências Culturais</h2>
    <p>
      Diferentes culturas têm contribuído para a evolução dos gêneros:
    </p>
    <ul>
      <li>Cinema asiático</li>
      <li>Cinema europeu</li>
      <li>Cinema latino-americano</li>
      <li>Cinema africano</li>
      <li>Cinema do Oriente Médio</li>
    </ul>
  `
};

export default function Post8() {
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