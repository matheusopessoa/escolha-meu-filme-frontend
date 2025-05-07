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
      <PostContainer>
        <Title>A Arte da Animação Moderna</Title>
        <Subtitle>Como a animação evoluiu além dos desenhos animados</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>2 de Março, 2025</PostDate>
          <PostText>
            <p>
              A animação evoluiu muito além dos desenhos animados tradicionais, com técnicas como 
              motion capture e animação 3D revolucionando o gênero. Estúdios como Pixar e Studio 
              Ghibli continuam inovando, criando histórias que ressoam com todas as idades.
            </p>

            <h2>Técnicas Modernas</h2>
            <p>
              As principais técnicas de animação incluem:
            </p>
            <ul>
              <li>Animação 3D</li>
              <li>Motion capture</li>
              <li>Stop motion</li>
              <li>Animação digital 2D</li>
              <li>Realidade virtual</li>
            </ul>

            <h2>Estúdios Inovadores</h2>
            <p>
              Alguns dos estúdios mais inovadores são:
            </p>
            <ul>
              <li>Pixar</li>
              <li>Studio Ghibli</li>
              <li>DreamWorks</li>
              <li>Laika</li>
              <li>Aardman</li>
            </ul>

            <h2>Impacto Cultural</h2>
            <p>
              A animação tem um impacto significativo:
            </p>
            <ul>
              <li>Alcance global</li>
              <li>Influência cultural</li>
              <li>Educação</li>
              <li>Entretenimento</li>
              <li>Arte</li>
            </ul>

            <h2>Novas Tecnologias</h2>
            <p>
              As tecnologias emergentes incluem:
            </p>
            <ul>
              <li>Inteligência artificial</li>
              <li>Realidade aumentada</li>
              <li>Animação em tempo real</li>
              <li>Renderização avançada</li>
              <li>Interatividade</li>
            </ul>

            <h2>O Futuro da Animação</h2>
            <p>
              O futuro da animação parece promissor:
            </p>
            <ul>
              <li>Mais realismo</li>
              <li>Maior interatividade</li>
              <li>Novas formas de narrativa</li>
              <li>Experiências imersivas</li>
            </ul>

            <p>
              A animação não é mais vista como um gênero apenas para crianças, com filmes como 
              'Soul' e 'Your Name' explorando temas complexos. O futuro da animação parece 
              ilimitado, com novas tecnologias e técnicas surgindo constantemente.
            </p>
          </PostText>
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