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

export default function Post10() {
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
        <Title>A Importância da Trilha Sonora</Title>
        <Subtitle>Como a música transforma a experiência cinematográfica</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>28 de Fevereiro, 2024</PostDate>
          <PostText>
            <p>
              A trilha sonora é um elemento fundamental na experiência cinematográfica, capaz de 
              evocar emoções, criar atmosfera e amplificar o impacto das cenas. Compositores como 
              Hans Zimmer e John Williams têm demonstrado o poder transformador da música no cinema.
            </p>

            <h2>Elementos da Trilha Sonora</h2>
            <p>
              Os principais elementos incluem:
            </p>
            <ul>
              <li>Música de fundo</li>
              <li>Efeitos sonoros</li>
              <li>Diálogos</li>
              <li>Silêncio</li>
              <li>Ambiente</li>
            </ul>

            <h2>Compositores Notáveis</h2>
            <p>
              Alguns dos maiores compositores são:
            </p>
            <ul>
              <li>Hans Zimmer</li>
              <li>John Williams</li>
              <li>Ennio Morricone</li>
              <li>Danny Elfman</li>
              <li>Howard Shore</li>
            </ul>

            <h2>Impacto Emocional</h2>
            <p>
              A música afeta as emoções de várias formas:
            </p>
            <ul>
              <li>Tensão</li>
              <li>Alegria</li>
              <li>Tristeza</li>
              <li>Expectativa</li>
              <li>Nostalgia</li>
            </ul>

            <h2>Técnicas de Composição</h2>
            <p>
              As técnicas mais utilizadas incluem:
            </p>
            <ul>
              <li>Leitmotiv</li>
              <li>Contraponto</li>
              <li>Orquestração</li>
              <li>Eletrônica</li>
              <li>Mistura de estilos</li>
            </ul>

            <h2>O Futuro da Trilha Sonora</h2>
            <p>
              As tendências futuras incluem:
            </p>
            <ul>
              <li>Inteligência artificial</li>
              <li>Realidade virtual</li>
              <li>Interatividade</li>
              <li>Novos instrumentos</li>
            </ul>

            <p>
              A trilha sonora continua sendo um elemento essencial na narrativa cinematográfica, 
              capaz de transformar uma boa história em uma experiência inesquecível. Com a evolução 
              da tecnologia e das técnicas de composição, o futuro da música no cinema parece 
              ainda mais promissor.
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