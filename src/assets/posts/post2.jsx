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
      <PostContainer>
        <Title>A Evolução dos Efeitos Especiais</Title>
        <Subtitle>Uma análise sobre como os efeitos especiais evoluíram ao longo dos anos</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>12 de Março, 2024</PostDate>
          <PostText>
            <p>
              Desde os primeiros filmes até os blockbusters atuais, os efeitos especiais percorreram 
              um longo caminho. A tecnologia transformou completamente a forma como as histórias são 
              contadas na tela grande, permitindo que diretores e cineastas criem mundos e cenas que 
              antes eram impossíveis de realizar.
            </p>

            <h2>Os Primórdios dos Efeitos Especiais</h2>
            <p>
              No início do cinema, os efeitos especiais eram basicamente práticos e mecânicos. 
              Técnicas como:
            </p>
            <ul>
              <li>Stop motion</li>
              <li>Maquetes em miniatura</li>
              <li>Pintura em vidro</li>
              <li>Efeitos de câmera</li>
            </ul>

            <h2>A Era Digital</h2>
            <p>
              Com o advento da computação gráfica, os efeitos especiais passaram por uma revolução. 
              Filmes como "Jurassic Park" e "Matrix" marcaram o início de uma nova era, onde a 
              tecnologia digital permitia criar criaturas e cenas realistas que antes eram 
              impossíveis.
            </p>

            <h2>Tecnologias Modernas</h2>
            <p>
              Hoje em dia, os efeitos especiais utilizam uma combinação de técnicas práticas e 
              digitais:
            </p>
            <ul>
              <li>Motion capture</li>
              <li>Realidade virtual</li>
              <li>Inteligência artificial</li>
              <li>Renderização em tempo real</li>
            </ul>

            <h2>O Impacto na Narrativa</h2>
            <p>
              Os efeitos especiais modernos não são apenas sobre criar imagens impressionantes, 
              mas também sobre contar histórias de forma mais imersiva e envolvente. Eles permitem 
              que os cineastas:
            </p>
            <ul>
              <li>Criem mundos fantásticos</li>
              <li>Desenvolvam personagens únicos</li>
              <li>Realizem cenas de ação complexas</li>
              <li>Transportem o público para novas realidades</li>
            </ul>

            <h2>O Futuro dos Efeitos Especiais</h2>
            <p>
              Com o avanço contínuo da tecnologia, o futuro dos efeitos especiais parece ainda 
              mais promissor. Novas técnicas e ferramentas estão sendo desenvolvidas constantemente, 
              permitindo que os cineastas criem experiências cada vez mais imersivas e realistas.
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