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
  max-width: 900px;
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
  color: #FFA500;
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
        O que torna o <strong>Escolha Meu Filme</strong> especial? Todas as nossas recomendações são baseadas em um processo simples: você escolhe sua plataforma de streaming favorita (Netflix, Amazon, Disney, Max, Globoplay), decide entre um filme mainstream ou cult, e seleciona até dois gêneros que combinam com seu humor ou ocasião. Em segundos, nosso sistema sugere filmes perfeitos, ordenados por qualidade e popularidade – e tudo isso sem custo algum! Atualizamos constantemente nosso catálogo com novos títulos, garantindo que você sempre tenha opções frescas para explorar. Quer assistir algo para impressionar num date? Temos sugestões perfeitas para isso. Prefere filmes baseados em histórias reais, aventuras espaciais ou clássicos que mudam sua visão de mundo? Estamos preparados para te guiar! <br/><br/>
        Totalmente gratuito e fácil de usar, o <strong>Escolha Meu Filme</strong> é o companheiro ideal para quem ama cinema mas odeia perder tempo escolhendo. Dê uma chance e descubra como é simples encontrar o filme perfeito. Gostou? Compartilhe com os amigos! Não gostou? Adoraríamos ouvir seu feedback para melhorar ainda mais. Afinal, nosso objetivo é transformar sua experiência de assistir filmes em algo prático, divertido e inesquecível!
      </FooterText>
    </FooterContainer>
  );
}