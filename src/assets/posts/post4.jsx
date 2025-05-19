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
  title: 'A Importância da Representatividade no Cinema',
  subtitle: 'Como a diversidade está transformando a indústria cinematográfica',
  date: '8 de Março, 2025',
  content: `
    <p>
      A representatividade no cinema tem se tornado um tema cada vez mais importante na 
      indústria cinematográfica. A diversidade de vozes, histórias e perspectivas não é 
      apenas uma questão de justiça social, mas também um fator crucial para a evolução 
      da arte cinematográfica.
    </p>

    <h2>O Que é Representatividade?</h2>
    <p>
      Representatividade no cinema envolve:
    </p>
    <ul>
      <li>Diversidade étnica e racial</li>
      <li>Representação de gênero</li>
      <li>Inclusão de pessoas com deficiência</li>
      <li>Representação LGBTQIA+</li>
    </ul>

    <h2>Impacto na Indústria</h2>
    <p>
      A representatividade tem trazido mudanças significativas:
    </p>
    <ul>
      <li>Novas perspectivas narrativas</li>
      <li>Maior autenticidade nas histórias</li>
      <li>Público mais engajado</li>
      <li>Sucesso comercial comprovado</li>
    </ul>

    <h2>Desafios e Oportunidades</h2>
    <p>
      Ainda existem desafios a serem superados:
    </p>
    <ul>
      <li>Barreiras sistêmicas</li>
      <li>Estereótipos persistentes</li>
      <li>Falta de oportunidades</li>
      <li>Necessidade de mais inclusão</li>
    </ul>
  `
};

export default function Post4() {
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