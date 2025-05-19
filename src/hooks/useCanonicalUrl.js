import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://escolhameufilme.com';

// Mapeamento de rotas para URLs canônicas personalizadas
const ROUTE_MAPPINGS = {
  '/': '',
  '/escolher-filme': '/escolher-filme',
  '/top10': '/top10',
  '/como-escolhemos': '/como-escolhemos',
  '/aleatorio': '/aleatorio',
  '/termos': '/termos',
  '/blog': '/blog',
  '/privacidade': '/privacidade',
  '/sobre': '/sobre',
};

// Mapeamento de títulos para cada rota
const ROUTE_TITLES = {
  '/': 'Escolha Meu Filme - Encontre o filme perfeito para assistir agora',
  '/escolher-filme': 'Escolher Filme - Encontre recomendações personalizadas de filmes',
  '/top10': 'Top 10 Filmes - Os melhores filmes por categoria',
  '/como-escolhemos': 'Como Escolhemos - Nossa metodologia de recomendação',
  '/aleatorio': 'Filme Aleatório - Descubra um novo filme para assistir',
  '/termos': 'Termos de Uso - Escolha Meu Filme',
  '/blog': 'Blog - Novidades e recomendações de filmes',
  '/privacidade': 'Política de Privacidade - Escolha Meu Filme',
  '/sobre': 'Sobre Nós - Escolha Meu Filme',
};

// Mapeamento de descrições para cada rota
const ROUTE_DESCRIPTIONS = {
  '/': 'Descubra o filme perfeito para assistir hoje. Mais de 4000 filmes, totalmente gratuito e sem cadastro. Filtragem por gênero e plataforma de streaming.',
  '/escolher-filme': 'Use nosso sistema inteligente para encontrar filmes baseados em seus gostos. Recomendações personalizadas de Netflix, Prime Video, Disney+ e mais.',
  '/top10': 'Confira nossas listas dos 10 melhores filmes por categoria. Atualizadas semanalmente com os filmes mais populares e bem avaliados.',
  '/como-escolhemos': 'Entenda como nosso algoritmo seleciona os melhores filmes para você. Critérios de avaliação e fontes de dados explicados.',
  '/aleatorio': 'Deixe a sorte escolher seu próximo filme. Filmes aleatórios de qualidade garantida para sua sessão de cinema.',
  '/termos': 'Termos de uso e condições de serviço do Escolha Meu Filme. Leia sobre seus direitos e responsabilidades.',
  '/blog': 'Dicas, novidades e análises do mundo do cinema. Atualizações semanais com conteúdo exclusivo sobre filmes.',
  '/privacidade': 'Nossa política de privacidade explica como protegemos seus dados e respeitamos sua privacidade.',
  '/sobre': 'Conheça a história e a missão do Escolha Meu Filme. Saiba como ajudamos milhões a encontrar o filme perfeito.',
};

// Mapeamento expandido de keywords para cada rota
const ROUTE_KEYWORDS = {
  '/': 'filme para assistir hoje, qual filme assistir, que filme ver hoje, recomendação de filme, sugestão de filme, ' +
       'filme netflix, filme prime video, filme disney plus, filme hbo max, filme globoplay, filme star plus, filme apple tv, filme paramount plus, ' +
       'filme online, filme streaming, filme para ver hoje, filme bom para assistir, filme novo, lançamento filme, filme 2024, ' +
       'filme para casal, filme em família, filme para assistir em casa, filme gratuito, filme sem cadastro, ' +
       'filme por gênero, filme por streaming, filme por categoria, filme por plataforma, filme por preferência, ' +
       'filme por gosto, filme por avaliação, filme por nota, filme por popularidade, filme por lançamento, ' +
       'filme por idioma, filme dublado, filme legendado, filme nacional, filme internacional, ' +
       'filme para maratonar, filme para relaxar, filme para chorar, filme para rir, filme para pensar, ' +
       'filme para dormir, filme para estudar, filme para meditar, filme para inspirar, ' +
       'filme para criança, filme para adolescente, filme para adulto, filme para idoso, ' +
       'filme para domingo, filme para feriado, filme para férias, filme para fim de semana, ' +
       'filme para noite, filme para tarde, filme para manhã, filme para madrugada, ' +
       'filme romântico, filme de ação, filme de terror, filme de comédia, filme de drama, ' +
       'filme de suspense, filme de aventura, filme de ficção científica, filme de fantasia, ' +
       'filme de animação, filme de documentário, filme de guerra, filme de faroeste, ' +
       'filme oscar, filme premiado, filme cult, filme clássico, filme indie, filme blockbuster, ' +
       'filme baseado em fatos reais, filme baseado em livro, filme original netflix, filme exclusivo streaming',

  '/escolher-filme': 'escolher filme, como escolher filme, ajuda para escolher filme, dicas para escolher filme, ' +
       'recomendação personalizada, filme netflix, filme prime video, filme disney plus, filme hbo max, filme globoplay, ' +
       'filme por gênero, filme por streaming, filme para assistir hoje, filme novo, filme recomendado, filme sugerido, ' +
       'filme por preferência, filme por gosto, filme por humor, filme por ocasião, filme por momento, ' +
       'não sei que filme assistir, me ajuda a escolher um filme, sugestão de filme para hoje, ' +
       'filme parecido com, filme similar a, filme do mesmo diretor, filme do mesmo ator, ' +
       'filme do mesmo gênero, filme da mesma categoria, filme do mesmo estilo, ' +
       'filme para assistir com namorado, filme para assistir com namorada, filme para assistir sozinho, ' +
       'filme para assistir com amigos, filme para assistir em grupo, filme para assistir em casal, ' +
       'filme para assistir em família, filme para assistir com crianças, filme para assistir com adolescentes',

  '/top10': 'top 10 filmes, melhores filmes, ranking filmes, filmes mais assistidos, filmes populares, ' +
       'filmes bem avaliados, melhores filmes netflix, melhores filmes prime video, melhores filmes disney plus, ' +
       'melhores filmes por categoria, filmes recomendados, top filmes 2024, lista de filmes, ' +
       'filmes mais votados, filmes mais curtidos, filmes mais comentados, filmes mais baixados, ' +
       'filmes mais procurados, filmes mais pesquisados, filmes mais vistos, filmes mais populares, ' +
       'filmes mais aclamados, filmes mais premiados, filmes mais elogiados, filmes mais criticados, ' +
       'filmes imperdíveis, filmes obrigatórios, filmes essenciais, filmes fundamentais, ' +
       'filmes que você precisa assistir, filmes que você não pode perder, filmes que marcaram época',

  '/como-escolhemos': 'como escolher filme, critérios de avaliação, algoritmo de filmes, recomendação inteligente, ' +
       'sistema de recomendação, avaliação de filmes, qualidade de filmes, seleção de filmes, curadoria de filmes, ' +
       'metodologia de escolha, como funciona, como é feito, como é calculado, como é decidido, ' +
       'critérios de seleção, critérios de escolha, critérios de avaliação, critérios de recomendação, ' +
       'inteligência artificial filmes, machine learning filmes, algoritmo de recomendação, ' +
       'sistema de sugestão, sistema de indicação, sistema de recomendação personalizada',

  '/aleatorio': 'filme aleatório, filme surpresa, descobrir filme novo, filme randômico, filme do dia, ' +
       'sugestão aleatória, filme diferente, filme desconhecido, filme surpresa netflix, filme surpresa streaming, ' +
       'me surpreenda com um filme, escolha um filme para mim, filme qualquer, filme ao acaso, ' +
       'filme random, filme sortido, filme sorteado, filme da sorte, filme do momento, ' +
       'descobrir novos filmes, explorar filmes, conhecer filmes novos, filmes diferentes',

  '/blog': 'blog de cinema, blog de filmes, notícias de cinema, críticas de filmes, análises de filmes, ' +
       'resenhas de filmes, novidades cinema, lançamentos filmes, dicas de filmes, artigos sobre cinema, ' +
       'cultura pop, entretenimento, blog filmes 2024, blog streaming, blog netflix, blog prime video, ' +
       'blog disney plus, blog hbo max, blog globoplay, recomendações de filmes, guia de filmes, ' +
       'cinema em casa, filmes online, bastidores de filmes, curiosidades de filmes, making of, ' +
       'entrevistas com atores, entrevistas com diretores, história do cinema, teoria do cinema, ' +
       'análise de cena, análise de roteiro, análise de fotografia, análise de trilha sonora, ' +
       'oscar 2024, premiações de cinema, festivais de cinema, bilheteria, box office',

  '/privacidade': 'política de privacidade, proteção de dados, privacidade online, segurança de dados, ' +
       'LGPD, dados pessoais, cookies, termos de privacidade, confidencialidade, segurança da informação, ' +
       'proteção de informações, dados do usuário, política de cookies, política de uso de dados',

  '/sobre': 'sobre escolha meu filme, quem somos, nossa história, missão, valores, equipe, sobre nós, ' +
       'história do site, propósito, objetivo, por que existimos, como começamos, nossa equipe, ' +
       'nosso diferencial, nossa proposta, nosso trabalho, nossa expertise, nossos serviços',
};

export const useCanonicalUrl = () => {
  const location = useLocation();
  
  return useMemo(() => {
    const path = location.pathname;
    let canonicalPath = ROUTE_MAPPINGS[path] || path;
    
    // Tratamento especial para rotas dinâmicas
    if (path.startsWith('/top10/')) {
      canonicalPath = path;
      
      // Extrair tipo e opção da URL para keywords dinâmicas
      const [, , type, option] = path.split('/');
      if (type && option) {
        const baseKeywords = ROUTE_KEYWORDS['/top10'];
        const dynamicKeywords = type === 'genre' 
          ? `${baseKeywords}, filmes de ${option}, melhores filmes de ${option}, top filmes ${option}, filmes ${option} 2024`
          : `${baseKeywords}, filmes ${option}, melhores filmes ${option}, lançamentos ${option}, catálogo ${option}`;
        return {
          canonicalUrl: `${BASE_URL}${canonicalPath}`,
          pageTitle: ROUTE_TITLES['/top10'],
          pageDescription: ROUTE_DESCRIPTIONS['/top10'],
          pageKeywords: dynamicKeywords
        };
      }
    }
    
    if (path.startsWith('/blog/')) {
      canonicalPath = path;
      // Adicionar keywords específicas para posts do blog
      const baseKeywords = ROUTE_KEYWORDS['/blog'];
      return {
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
        pageTitle: ROUTE_TITLES['/blog'],
        pageDescription: ROUTE_DESCRIPTIONS['/blog'],
        pageKeywords: `${baseKeywords}, artigo de cinema, post sobre filmes, análise de filme`
      };
    }
    
    const canonicalUrl = `${BASE_URL}${canonicalPath}`;
    const pageTitle = ROUTE_TITLES[path] || ROUTE_TITLES['/'];
    const pageDescription = ROUTE_DESCRIPTIONS[path] || ROUTE_DESCRIPTIONS['/'];
    const pageKeywords = ROUTE_KEYWORDS[path] || ROUTE_KEYWORDS['/'];
    
    return {
      canonicalUrl,
      pageTitle,
      pageDescription,
      pageKeywords
    };
  }, [location.pathname]);
};

export default useCanonicalUrl; 