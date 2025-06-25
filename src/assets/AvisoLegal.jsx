import React from 'react';
import styled from 'styled-components';
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
  text-align: center;
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

const ImportantText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #ffd700;
  font-weight: bold;
  background: rgba(255, 215, 0, 0.1);
  padding: 1rem;
  border-left: 4px solid #ffd700;
  border-radius: 4px;
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

const DisclaimerBox = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 2px solid #ff4444;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

const DisclaimerTitle = styled.h3`
  color: #ff4444;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export default function AvisoLegal() {
  return (
    <Container>
      <BackButton />
      <Title>Aviso Legal</Title>

      <DisclaimerBox>
        <DisclaimerTitle>⚠️ AVISO IMPORTANTE</DisclaimerTitle>
        <Text style={{ color: '#ff4444', fontWeight: 'bold' }}>
          Este site NÃO é um serviço de streaming de filmes. Somos uma ferramenta de recomendação 
          que utiliza algoritmos personalizados para sugerir filmes baseados em suas preferências.
        </Text>
      </DisclaimerBox>

      <Section>
        <SectionTitle>1. Propósito do Site</SectionTitle>
        <Text>
          Nosso site é uma ferramenta de recomendação de filmes que utiliza tecnologia avançada 
          para analisar suas preferências e sugerir filmes que podem ser do seu interesse.
        </Text>
        <ImportantText>
          <strong>O que fazemos:</strong> Analisamos suas preferências e fornecemos recomendações 
          personalizadas de filmes através de algoritmos inteligentes.
        </ImportantText>
        <ImportantText>
          <strong>O que NÃO fazemos:</strong> Não oferecemos streaming, download ou reprodução 
          de filmes. Não hospedamos conteúdo audiovisual.
        </ImportantText>
      </Section>

      <Section>
        <SectionTitle>2. Funcionamento do Serviço</SectionTitle>
        <Text>
          Nossa ferramenta funciona da seguinte forma:
        </Text>
        <List>
          <ListItem>Coletamos informações sobre suas preferências de filmes através de interações com o site</ListItem>
          <ListItem>Utilizamos algoritmos de recomendação para analisar padrões e gostos</ListItem>
          <ListItem>Fornecemos sugestões personalizadas de filmes baseadas em sua análise</ListItem>
          <ListItem>Apresentamos informações sobre filmes, incluindo sinopses, avaliações e dados técnicos</ListItem>
        </List>
        <Text>
          Todas as recomendações são geradas automaticamente por nosso sistema, sem intervenção humana direta.
        </Text>
      </Section>

      <Section>
        <SectionTitle>3. Limitações do Serviço</SectionTitle>
        <Text>
          É importante entender as limitações do nosso serviço:
        </Text>
        <List>
          <ListItem>Não reproduzimos, transmitimos ou disponibilizamos filmes para visualização</ListItem>
          <ListItem>Não oferecemos links para download ou streaming de conteúdo</ListItem>
          <ListItem>Não garantimos a disponibilidade dos filmes recomendados em plataformas de streaming</ListItem>
          <ListItem>As recomendações são sugestões baseadas em algoritmos e podem não refletir suas preferências exatas</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. Direitos Autorais e Propriedade Intelectual</SectionTitle>
        <Text>
          Respeitamos integralmente os direitos autorais e a propriedade intelectual:
        </Text>
        <List>
          <ListItem>Não reproduzimos conteúdo protegido por direitos autorais</ListItem>
          <ListItem>Utilizamos apenas informações públicas sobre filmes (títulos, sinopses, avaliações)</ListItem>
          <ListItem>Não hospedamos trailers, imagens ou qualquer material audiovisual dos filmes</ListItem>
          <ListItem>Nossas recomendações são baseadas em dados públicos e algoritmos próprios</ListItem>
        </List>
        <Text>
          Qualquer conteúdo audiovisual relacionado aos filmes deve ser acessado através de 
          plataformas legítimas e autorizadas.
        </Text>
      </Section>

      <Section>
        <SectionTitle>5. Responsabilidade do Usuário</SectionTitle>
        <Text>
          Ao usar nosso serviço, você reconhece e concorda que:
        </Text>
        <List>
          <ListItem>É responsável por verificar a legalidade de qualquer conteúdo que acesse</ListItem>
          <ListItem>Deve respeitar os direitos autorais ao acessar filmes através de plataformas legítimas</ListItem>
          <ListItem>Não nos responsabilizamos pela disponibilidade dos filmes em plataformas de streaming</ListItem>
          <ListItem>As recomendações são sugestões e não garantias de qualidade ou disponibilidade</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>6. Plataformas de Streaming</SectionTitle>
        <Text>
          Quando recomendamos um filme, você pode encontrá-lo em diversas plataformas legítimas de streaming, 
          tais como:
        </Text>
        <List>
          <ListItem>Netflix, Amazon Prime Video, Disney+, HBO Max</ListItem>
          <ListItem>Plataformas locais brasileiras autorizadas</ListItem>
          <ListItem>Serviços de aluguel digital (Google Play, iTunes, etc.)</ListItem>
          <ListItem>Cinemas e locadoras físicas</ListItem>
        </List>
        <Text>
          Recomendamos sempre verificar a disponibilidade e legalidade antes de acessar qualquer conteúdo.
        </Text>
      </Section>

      <Section>
        <SectionTitle>7. Isenção de Responsabilidade</SectionTitle>
        <Text>
          Nosso site é fornecido "como está" e não nos responsabilizamos por:
        </Text>
        <List>
          <ListItem>Disponibilidade de filmes em plataformas de streaming</ListItem>
          <ListItem>Qualidade ou precisão das recomendações fornecidas</ListItem>
          <ListItem>Conteúdo disponibilizado por terceiros</ListItem>
          <ListItem>Qualquer dano resultante do uso de nosso serviço</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>8. Links Externos e Anúncios</SectionTitle>
        <Text>
          Nosso site pode conter links para sites externos e anúncios de terceiros:
        </Text>
        
        <SubSectionTitle>8.1 Links para Plataformas de Streaming</SubSectionTitle>
        <Text>
          Quando fornecemos links para plataformas de streaming, estes são apenas encaminhamentos 
          para facilitar sua navegação. Não nos responsabilizamos por:
        </Text>
        <List>
          <ListItem>Conteúdo disponibilizado pelas plataformas de streaming</ListItem>
          <ListItem>Disponibilidade dos filmes nas plataformas linkadas</ListItem>
          <ListItem>Políticas de uso ou termos de serviço das plataformas externas</ListItem>
          <ListItem>Qualquer problema técnico ou de acesso às plataformas</ListItem>
        </List>
        
        <SubSectionTitle>8.2 Google AdSense e Anúncios</SubSectionTitle>
        <Text>
          Nosso site utiliza o Google AdSense para exibir anúncios. É importante esclarecer que:
        </Text>
        <List>
          <ListItem>Os anúncios exibidos são de responsabilidade exclusiva do Google</ListItem>
          <ListItem>Não controlamos o conteúdo, formato ou direcionamento dos anúncios</ListItem>
          <ListItem>O Google é responsável pela seleção e exibição de anúncios</ListItem>
          <ListItem>Não nos responsabilizamos por produtos, serviços ou conteúdo promovido nos anúncios</ListItem>
          <ListItem>Qualquer interação com anúncios é de responsabilidade do usuário e do Google</ListItem>
        </List>
        
        <SubSectionTitle>8.3 Sites de Terceiros</SubSectionTitle>
        <Text>
          Ao clicar em links externos ou anúncios, você será direcionado para sites de terceiros. 
          Recomendamos:
        </Text>
        <List>
          <ListItem>Verificar sempre a legitimidade dos sites antes de fornecer informações</ListItem>
          <ListItem>Ler os termos de uso e políticas de privacidade dos sites externos</ListItem>
          <ListItem>Não fornecer informações pessoais sem verificar a segurança do site</ListItem>
          <ListItem>Usar seu próprio critério ao interagir com conteúdo de terceiros</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>9. Conformidade Legal</SectionTitle>
        <Text>
          Nosso serviço opera em total conformidade com as leis brasileiras e internacionais:
        </Text>
        <List>
          <ListItem>Respeitamos todos os direitos autorais e propriedade intelectual</ListItem>
          <ListItem>Não facilitamos ou incentivamos o acesso a conteúdo ilegal</ListItem>
          <ListItem>Operamos como uma ferramenta de recomendação legítima</ListItem>
          <ListItem>Utilizamos apenas dados públicos e algoritmos próprios</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>10. Contato</SectionTitle>
        <Text>
          Se você tiver dúvidas sobre este aviso legal ou sobre como nosso serviço funciona, 
          entre em contato conosco através dos canais disponibilizados em nosso site.
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
