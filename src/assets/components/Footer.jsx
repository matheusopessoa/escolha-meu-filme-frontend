import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  text-align: center;
  color: white;
  font-size: 1rem;
  line-height: 1.6;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const FooterText = styled.p`
  margin: 0 auto;
  opacity: 0.9;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatNumber = styled.span`
  color:rgb(255, 255, 255);
  font-size: 1.5rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <StatsContainer>
        <StatItem>
          <StatNumber>+4000</StatNumber>
          Filmes
        </StatItem>
        <StatItem>
          <StatNumber>17</StatNumber>
          Gêneros
        </StatItem>
        <StatItem>
          <StatNumber>+10.000</StatNumber>
          Atores
        </StatItem>
      </StatsContainer>
      <FooterText>
        <strong>Escolha Meu Filme</strong> é a maneira inteligente e gratuita de encontrar o filme perfeito para você! Assistir filmes é incrível, mas decidir qual assistir pode ser um desafio. Passar horas rolando catálogos no Netflix, procurando trailers no YouTube ou checando notas no IMDb, só para acabar sem escolher nada – isso soa familiar? Aqui está a solução! Nosso site foi projetado para simplificar sua escolha em poucos passos. Com mais de 4000 filmes em nosso banco de dados, 17 gêneros variados como ação, comédia, drama, terror, romance e ficção científica, além de mais de 10.000 atores, nós te ajudamos a encontrar o filme ideal para qualquer momento – seja para uma noite solo, um encontro romântico ou uma sessão com amigos.
      </FooterText>
      <FooterText>
  Você já se cansou de passar horas rolando infinitos catálogos em busca do filme ideal? No <strong>Escolha Meu Filme</strong>, eliminamos toda essa indecisão com um processo simples e eficiente, baseado em quatro pilares fundamentais:

  1. <strong>Provedor de Streaming</strong>: selecione de onde você quer assistir – Netflix, Amazon Prime Video, Disney+, Max ou Globoplay – e tenha acesso apenas aos títulos disponíveis na sua plataforma favorita.  
  2. <strong>Mainstream x Cult</strong>: prefira grandes sucessos de bilheteria ou mergulhe no universo alternativo de produções cult, cheias de personalidade e histórias surpreendentes.  
  3. <strong>Gêneros Personalizados</strong>: escolha até dois gêneros que combinem com o seu humor ou ocasião – ação, comédia, drama, suspense, romance, ficção científica, documentário, terror, e muito mais.  
  Internamente, analisamos a <strong>Qualidade do Filme</strong>: analisamos fatores como narrativa, direção, fotografia e recepção crítica para garantir que cada filme recomendado tenha um alto padrão de qualidade, proporcionando experiências cinematográficas memoráveis.

  <br/>
  Após você fazer suas escolhas, nosso sistema reúne todas essas preferências e apresenta uma lista de sugestões cuidadosamente ordenadas. Cada título aparece acompanhado de um breve resumo e avaliação de qualidade, para que você entenda rapidamente por que aquele filme é a aposta certa para o seu momento.

  <br/>
  Pense em todas as vezes que já desistiu de assistir algo simplesmente por não saber por onde começar. Com o <strong>Escolha Meu Filme</strong>, isso fica no passado. Em questão de segundos, você recebe opções que atendem exatamente aos seus critérios – sem cliques desnecessários, sem cadastros demorados e sem custo algum.

  <br/><br/>
  Seja para uma maratona com os amigos, um encontro romântico, um momento em família ou aquela sessão solo de relaxamento, nós temos a sugestão perfeita. E o melhor de tudo: você pode refinar sua busca sempre que quiser, experimentando novas combinações de provedor, perfil de público e estilo de filme, até encontrar o que realmente toca o seu gosto.

  <br/><br/>
  Não perca mais tempo navegando sem rumo. Experimente agora mesmo o <strong>Escolha Meu Filme</strong> e descubra o poder de encontrar o filme ideal em poucos cliques. Gostou do resultado? Compartilhe com seus amigos e ajude outros cinéfilos a economizar tempo. Tem alguma sugestão ou feedback? Adoraríamos ouvir você—nosso compromisso é evoluir sempre para tornar sua experiência cada vez mais simples, rápida e divertida!
</FooterText>

    </FooterContainer>
  );
}