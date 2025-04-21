import Background from './components/Background';
import Title from './components/Title';
import Footer from './components/Footer';
import styled from 'styled-components';
import Header from './components/Header';

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: white;
`;

const Section = styled.div`
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

const SectionTitle = styled.h2`
  color: #FFA500;
  margin-bottom: 15px;
`;

const Text = styled.p`
  line-height: 1.6;
  margin-bottom: 15px;
`;

export default function TermosDeUso() {
  return (
    <Background>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <Title>Termos de Uso e Política de Cookies</Title>
        
        <ContentContainer>
          <Section>
            <SectionTitle>Coleta e Uso de Dados</SectionTitle>
            <Text>
              O site Escolha Meu Filme exibe anúncios personalizados com base em interesses e comportamentos de navegação. Para isso, utilizamos tecnologias como cookies e identificadores de dispositivo que nos ajudam a melhorar sua experiência e oferecer recomendações e publicidade mais relevante.
            </Text>
            <Text>
              Cookies são pequenos arquivos de texto armazenados no seu navegador. Eles permitem que o site "lembre" de suas preferências, como idioma, plataforma de streaming favorita ou tipos de filmes visualizados.
            </Text>
          </Section>

          <Section>
            <SectionTitle>Tipos de Dados Coletados</SectionTitle>
            <Text>
              Podemos coletar e utilizar as seguintes informações, diretamente ou por meio de serviços de publicidade parceiros (como Google Ads):
            </Text>
            <ul>
              <li>Endereço IP</li>
              <li>Tipo e versão do navegador</li>
              <li>Tipo e modelo de dispositivo</li>
              <li>Sistema operacional</li>
              <li>Idioma do navegador</li>
              <li>Páginas acessadas e tempo de navegação</li>
              <li>Interações com anúncios</li>
              <li>Preferências de conteúdo (como gêneros e plataformas de streaming selecionadas)</li>
            </ul>
            <Text>
              Esses dados nunca são usados para identificar você pessoalmente e são processados de forma agregada e anônima.
            </Text>
          </Section>

          <Section>
            <SectionTitle>Publicidade Personalizada</SectionTitle>
            <Text>
              Anúncios exibidos no Escolha Meu Filme podem ser personalizados com base na sua navegação anterior, tanto neste quanto em outros sites. Isso é feito por redes de publicidade parceiras que utilizam cookies e outras tecnologias semelhantes para criar perfis de interesse.
            </Text>
            <Text>
              Você pode optar por desativar a personalização de anúncios nas configurações do seu navegador ou usando ferramentas como:
            </Text>
            <ul>
              <li>Configurações de Anúncios do Google</li>
              <li>Network Advertising Initiative</li>
            </ul>
            <Text>
              Desabilitar cookies pode limitar funcionalidades do site, como recomendações de filmes baseadas nas suas preferências anteriores.
            </Text>
          </Section>

          <Section>
            <SectionTitle>Transparência e Controle</SectionTitle>
            <Text>
              Nós respeitamos sua privacidade. O Escolha Meu Filme não coleta dados sensíveis (como localização exata ou informações pessoais) nem armazena informações de login, documentos ou fotos.
            </Text>
            <Text>
              Ao continuar utilizando este site, você concorda com o uso de cookies e com os termos descritos nesta página.
            </Text>
          </Section>
        </ContentContainer>
      </div>
      <Footer />
    </Background>
  );
} 