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
  title: 'O Poder do Cinema Documental',
  subtitle: 'Como os documentários estão mudando o mundo',
  date: '1 de Março, 2025',
  content: `
    <p>
      O cinema documental tem se mostrado uma ferramenta poderosa para contar histórias reais 
      e provocar mudanças sociais. Com o avanço da tecnologia e novas plataformas de distribuição, 
      os documentários têm alcançado audiências maiores e causado impactos significativos na sociedade.
    </p>

    <h2>O Que é um Documentário?</h2>
    <p>
      Documentários são caracterizados por:
    </p>
    <ul>
      <li>Narrativas baseadas em fatos reais</li>
      <li>Pesquisa aprofundada</li>
      <li>Entrevistas com especialistas</li>
      <li>Registro de eventos históricos</li>
    </ul>

    <h2>Impacto Social</h2>
    <p>
      Os documentários têm causado mudanças significativas:
    </p>
    <ul>
      <li>Conscientização sobre questões ambientais</li>
      <li>Exposição de injustiças sociais</li>
      <li>Mobilização de movimentos sociais</li>
      <li>Mudanças em políticas públicas</li>
    </ul>

    <h2>Novas Tecnologias</h2>
    <p>
      A tecnologia tem revolucionado o cinema documental:
    </p>
    <ul>
      <li>Câmeras mais acessíveis</li>
      <li>Edição digital avançada</li>
      <li>Distribuição online</li>
      <li>Realidade virtual e aumentada</li>
    </ul>
  `,
  footer: {
    title: 'Documentários Recomendados',
    content: `
      <p>
        Confira alguns documentários imperdíveis que estão disponíveis nas principais 
        plataformas de streaming:
      </p>
      <ul>
        <li>O Dilema das Redes (Netflix)</li>
        <li>Seaspiracy (Netflix)</li>
        <li>Minimalismo (Netflix)</li>
        <li>O Código Bill Gates (Netflix)</li>
        <li>Free Solo (Disney+)</li>
      </ul>
      <p>
        Estes documentários não apenas informam, mas também inspiram mudanças positivas 
        na sociedade. Cada um deles aborda temas relevantes e atuais, oferecendo novas 
        perspectivas sobre questões importantes do nosso tempo.
      </p>
    `
  }
};

export default function Post9() {
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
      <Footer 
        title={postContent.footer.title}
        content={postContent.footer.content}
      />
    </Background>
  );
} 