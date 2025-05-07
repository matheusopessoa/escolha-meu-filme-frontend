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

export default function Post3() {
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
        <Title>O Poder das Narrativas Independentes</Title>
        <Subtitle>Como filmes independentes estão ganhando espaço e reconhecimento</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>10 de Março, 2024</PostDate>
          <PostText>
            <p>
              Enquanto os blockbusters dominam as bilheterias, o cinema independente continua sendo 
              uma força vital na indústria, trazendo histórias únicas e perspectivas diferentes que 
              muitas vezes não encontrariam espaço no cinema mainstream.
            </p>

            <h2>O Que Define um Filme Independente?</h2>
            <p>
              Filmes independentes são caracterizados por:
            </p>
            <ul>
              <li>Orçamentos mais baixos</li>
              <li>Maior liberdade criativa</li>
              <li>Distribuição alternativa</li>
              <li>Foco em narrativas experimentais</li>
            </ul>

            <h2>O Impacto Cultural</h2>
            <p>
              O cinema independente tem sido crucial para:
            </p>
            <ul>
              <li>Descobrir novos talentos</li>
              <li>Explorar temas controversos</li>
              <li>Inovar em técnicas narrativas</li>
              <li>Representar vozes marginalizadas</li>
            </ul>

            <h2>Festivais e Reconhecimento</h2>
            <p>
              Festivais de cinema como Sundance, Cannes e Toronto têm sido fundamentais para dar 
              visibilidade a filmes independentes. Muitos diretores que hoje são aclamados 
              internacionalmente começaram suas carreiras no cinema independente.
            </p>

            <h2>O Papel do Streaming</h2>
            <p>
              As plataformas de streaming têm sido uma bênção para o cinema independente, oferecendo:
            </p>
            <ul>
              <li>Maior alcance de público</li>
              <li>Novas fontes de financiamento</li>
              <li>Liberdade para experimentar</li>
              <li>Oportunidades para cineastas emergentes</li>
            </ul>

            <h2>O Futuro do Cinema Independente</h2>
            <p>
              Com o avanço da tecnologia e as novas formas de distribuição, o cinema independente 
              está mais acessível do que nunca. A democratização dos meios de produção e a 
              facilidade de distribuição digital abrem novas possibilidades para cineastas 
              independentes contarem suas histórias.
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