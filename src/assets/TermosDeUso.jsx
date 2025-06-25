import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Footer from '../assets/components/Footer';
import { privacyContent } from '../data/staticContent';
import BackButton from '../components/BackButton';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #fff;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #fff;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;

const SubSectionTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: #fff;
  margin-top: 1.5rem;
`;

export default function TermosDeUso() {
  return (
    <Container>
      <Helmet>
        <title>Termos de Uso</title>
        <meta name="description" content="Saiba mais sobre os termos de uso do nosso site de músicas." />
        <meta name="keywords" content="Termos de Uso, música, privacidade, direitos autorais" />
      </Helmet>
      <BackButton />
      <Title>Termos de Uso</Title>
      
      <Section>
        <SectionTitle>1. Introdução</SectionTitle>
        <Text>
          Bem-vindo ao nosso site de músicas. Ao usar nosso site, você concorda com os seguintes termos de uso.
          Estes termos estabelecem as regras e regulamentos para o uso do nosso serviço.
        </Text>
      </Section>

      <Section>
        <SectionTitle>2. Uso do Site</SectionTitle>
        <Text>
          Nosso site é fornecido "como está" para uso pessoal e não comercial. Você pode usar nosso site para:
        </Text>
        <List>
          <ListItem>Navegar e visualizar conteúdo musical</ListItem>
          <ListItem>Utilizar as funcionalidades disponíveis no site</ListItem>
          <ListItem>Acessar informações sobre músicas e artistas</ListItem>
        </List>
        <Text>
          Você concorda em não usar o site para qualquer propósito ilegal ou não autorizado.
        </Text>
      </Section>

      <Section>
        <SectionTitle>3. Cookies e Tecnologias de Rastreamento</SectionTitle>
        <Text>
          Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação.
        </Text>
        
        <SubSectionTitle>3.1 Google Ads</SubSectionTitle>
        <Text>
          Utilizamos cookies do Google Ads para exibir anúncios personalizados. Estes cookies permitem que o Google e seus parceiros veiculem anúncios baseados em suas visitas ao nosso site e outros sites na internet.
        </Text>
        
        <SubSectionTitle>3.2 Tipos de Cookies Utilizados</SubSectionTitle>
        <List>
          <ListItem>Cookies de publicidade: Para exibir anúncios relevantes do Google Ads</ListItem>
          <ListItem>Cookies de análise: Para entender como os usuários interagem com nosso site</ListItem>
          <ListItem>Cookies de funcionalidade: Para melhorar a experiência do usuário</ListItem>
        </List>
        
        <SubSectionTitle>3.3 Gerenciamento de Cookies</SubSectionTitle>
        <Text>
          Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. 
          Note que desabilitar cookies pode afetar a funcionalidade do site.
        </Text>
      </Section>

      <Section>
        <SectionTitle>4. Coleta de Dados</SectionTitle>
        <Text>
          <strong>Importante:</strong> Nosso site não coleta, armazena ou processa dados pessoais dos usuários. 
          Não solicitamos cadastros, informações pessoais ou qualquer tipo de registro.
        </Text>
        <Text>
          As únicas informações coletadas são através de cookies para fins de publicidade do Google Ads, 
          conforme descrito na seção anterior.
        </Text>
      </Section>

      <Section>
        <SectionTitle>5. Propriedade Intelectual</SectionTitle>
        <Text>
          Todo o conteúdo disponível neste site, incluindo textos, imagens, gráficos, logotipos e software, 
          é propriedade nossa ou de nossos licenciadores e está protegido por leis de direitos autorais.
        </Text>
        <Text>
          O uso não autorizado de qualquer conteúdo deste site pode violar leis de direitos autorais, 
          marcas comerciais e outras leis aplicáveis.
        </Text>
      </Section>

      <Section>
        <SectionTitle>6. Limitação de Responsabilidade</SectionTitle>
        <Text>
          Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, 
          incidentais, especiais ou consequenciais que resultem do uso ou da impossibilidade de usar nosso site.
        </Text>
        <Text>
          Nosso site é fornecido sem garantias de qualquer tipo, expressas ou implícitas.
        </Text>
      </Section>

      <Section>
        <SectionTitle>7. Modificações dos Termos</SectionTitle>
        <Text>
          Reservamo-nos o direito de modificar estes termos de uso a qualquer momento. 
          As modificações entrarão em vigor imediatamente após sua publicação no site.
        </Text>
        <Text>
          É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer mudanças.
        </Text>
      </Section>

      <Section>
        <SectionTitle>8. Lei Aplicável</SectionTitle>
        <Text>
          Estes termos de uso são regidos pelas leis do Brasil. Qualquer disputa relacionada a estes termos 
          será resolvida nos tribunais competentes do Brasil.
        </Text>
      </Section>

      <Section>
        <SectionTitle>9. Contato</SectionTitle>
        <Text>
          Se você tiver dúvidas sobre estes termos de uso, entre em contato conosco através dos 
          canais disponibilizados em nosso site.
        </Text>
      </Section>

      <Section>
        <Text style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', fontStyle: 'italic' }}>
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </Text>
      </Section>
    </Container>
  );
} 