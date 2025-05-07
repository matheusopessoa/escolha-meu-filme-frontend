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
      <PostContainer>
        <Title>Cinema e Tecnologia: Uma Parceria em Constante Evolução</Title>
        <Subtitle>As inovações tecnológicas que estão moldando o futuro do cinema</Subtitle>

        <AdContainer>
          <GoogleAd
            adSlot="8901234567"
            style={{ display: 'block', width: '100%', height: '90px' }}
          />
        </AdContainer>

        <PostContent>
          <PostDate>8 de Março, 2024</PostDate>
          <PostText>
            <p>
              A relação entre cinema e tecnologia é uma das mais fascinantes da história da arte. 
              Desde os primeiros filmes mudos até as produções mais recentes, a tecnologia tem sido 
              um motor constante de inovação e transformação na indústria cinematográfica.
            </p>

            <h2>Revoluções Tecnológicas no Cinema</h2>
            <p>
              Ao longo dos anos, várias inovações tecnológicas transformaram o cinema:
            </p>
            <ul>
              <li>Som sincronizado</li>
              <li>Cinema colorido</li>
              <li>Efeitos especiais digitais</li>
              <li>Realidade virtual e aumentada</li>
            </ul>

            <h2>A Era Digital</h2>
            <p>
              A digitalização do cinema trouxe mudanças fundamentais:
            </p>
            <ul>
              <li>Produção mais acessível</li>
              <li>Distribuição facilitada</li>
              <li>Novas possibilidades de edição</li>
              <li>Maior qualidade de imagem</li>
            </ul>

            <h2>Tecnologias Emergentes</h2>
            <p>
              Novas tecnologias estão revolucionando a experiência cinematográfica:
            </p>
            <ul>
              <li>Inteligência artificial na produção</li>
              <li>Realidade virtual imersiva</li>
              <li>Holografia</li>
              <li>Streaming em alta qualidade</li>
            </ul>

            <h2>O Impacto na Narrativa</h2>
            <p>
              A tecnologia não apenas muda como os filmes são feitos, mas também como as histórias 
              são contadas. Novas ferramentas permitem:
            </p>
            <ul>
              <li>Narrativas não-lineares</li>
              <li>Experiências interativas</li>
              <li>Realismo aumentado</li>
              <li>Novas formas de storytelling</li>
            </ul>

            <h2>Desafios e Oportunidades</h2>
            <p>
              A evolução tecnológica traz tanto desafios quanto oportunidades:
            </p>
            <ul>
              <li>Necessidade de adaptação</li>
              <li>Novas formas de distribuição</li>
              <li>Mudanças nos modelos de negócio</li>
              <li>Oportunidades para novos talentos</li>
            </ul>

            <h2>O Futuro</h2>
            <p>
              O futuro do cinema será moldado pela tecnologia, mas sempre mantendo o foco na 
              narrativa e na experiência do espectador. A chave está em usar a tecnologia como 
              ferramenta para contar histórias de forma mais envolvente e imersiva.
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