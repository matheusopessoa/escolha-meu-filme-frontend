
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import SeoHead from './components/SeoHead';

const Blog = () => {
  const blogKeywords = 'blog de cinema, blog de filmes, notícias de cinema, críticas de filmes, análises de filmes, ' +
    'resenhas de filmes, novidades cinema, lançamentos filmes, dicas de filmes, artigos sobre cinema, cultura pop, ' +
    'entretenimento, blog filmes 2024, blog streaming, blog netflix, blog prime video, blog disney plus, ' +
    'blog hbo max, blog globoplay, recomendações de filmes, guia de filmes, cinema em casa, filmes online';

  const blogPosts = [
    {
      title: "25 Anos de Clube da Luta: Por Que o Soco de Tyler Durden Ainda Dói em 2025?",
      excerpt: "Clube da Luta, dirigido pela mão precisa e sombria de David Fincher, chegava aos cinemas. Agora, em julho de 2025, mais de 25 anos depois, olhamos para trás e percebe...",
      link: "/blog/post14",
      category: "Análise",
      readTime: "7 min"
    },
    {
      title: "M3GAN 2.0: Crítica",
      excerpt: "Quando M3GAN dançou desajeitadamente ao som de Taylor Swift em 2023, ela não apenas se tornou um meme instantâneo, mas também se consolidou como um novo ícone do terr...",
      link: "/blog/post13",
      category: "Crítica",
      readTime: "6 min"
    },
    {
      title: "Lilo & Stitch Live-Action: Elenco, Data e o Retorno da Voz Original de Stitch",
      excerpt: "'Ohana quer dizer família. Família quer dizer nunca abandonar ou esquecer.' Poucas frases da Disney marcaram tanto uma geração quanto est...",
      link: "/blog/post12",
      category: "Notícias",
      readTime: "6 min"
    },
    {
      title: "Filme do Minecraft: Tudo Sobre a Adaptação com Jack Black e Jason Momoa",
      excerpt: "Depois de anos de expectativa, o universo pixelado de Minecraft está finalmente chegando às telonas em formato live-action",
      link: "/blog/post11",
      category: "Notícias",
      readTime: "5 min"
    },
    {
      title: "A Arte do Roteiro: Construindo Histórias que Marcam",
      excerpt: "O roteiro é o alicerce sobre o qual todo filme é construído. É a primeira etapa na transformação de uma ideia em uma experiência cinematográfica",
      link: "/blog/post10",
      category: "Análise",
      readTime: "8 min"
    },
    {
      title: "A Magia dos Efeitos Especiais: Da Maquiagem ao CGI",
      excerpt: "Os efeitos especiais são uma parte fundamental da magia do cinema, permitindo que cineastas deem vida a mundos fantásticos",
      link: "/blog/post9",
      category: "Técnica",
      readTime: "6 min"
    },
    {
      title: "A Arte da Edição: Como a Montagem Dá Vida ao Cinema",
      excerpt: "A edição é frequentemente chamada de 'a gramática do cinema', pois é através dela que as imagens captadas ganham sentido",
      link: "/blog/post8",
      category: "Técnica",
      readTime: "7 min"
    },
    {
      title: "A Arte da Fotografia no Cinema: Pintando com Luz e Movimento",
      excerpt: "A fotografia cinematográfica é uma arte que vai muito além do simples registro de imagens. É através dela que o cinema cria sua linguagem visual",
      link: "/blog/post7",
      category: "Técnica",
      readTime: "8 min"
    },
    {
      title: "A Arte da Trilha Sonora: Como a Música Transforma o Cinema",
      excerpt: "A trilha sonora é um elemento crucial na experiência cinematográfica, capaz de intensificar emoções, criar atmosferas",
      link: "/blog/post6",
      category: "Análise",
      readTime: "6 min"
    },
    {
      title: "A Evolução do Cinema: Das Origens ao Streaming",
      excerpt: "A história do cinema é uma fascinante jornada de inovação tecnológica, evolução artística e transformação cultural. Neste artigo",
      link: "/blog/post5",
      category: "História",
      readTime: "10 min"
    },
    {
      title: "Guia Completo dos Gêneros Cinematográficos",
      excerpt: "Os gêneros cinematográficos são mais do que simples categorias: são linguagens próprias que moldam nossa expectativa e experiência",
      link: "/blog/post4",
      category: "Guia",
      readTime: "9 min"
    },
    {
      title: "Os Melhores Filmes de 2024 (Até Agora)",
      excerpt: "O ano de 2024 tem sido extraordinário para o cinema, com lançamentos marcantes em diversos gêneros",
      link: "/blog/post3",
      category: "Lista",
      readTime: "8 min"
    },
    {
      title: "Como Analisar um Filme: Um Guia Completo",
      excerpt: "A análise de filmes vai muito além de simplesmente gostar ou não de uma obra. É uma habilidade que envolve compreender diversos elementos",
      link: "/blog/post2",
      category: "Guia",
      readTime: "7 min"
    },
    {
      title: "Como Escolher o Filme Perfeito para sua Noite de Cinema",
      excerpt: "Escolher um filme para assistir pode parecer uma tarefa simples, mas quando nos deparamos com milhares de opções...",
      link: "/blog/post1",
      category: "Dicas",
      readTime: "5 min"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Análise': 'from-purple-500/20 to-purple-500/30 text-purple-400 border-purple-500/20',
      'Crítica': 'from-netflix-red/20 to-netflix-red/30 text-netflix-red border-netflix-red/20',
      'Notícias': 'from-blue-500/20 to-blue-500/30 text-blue-400 border-blue-500/20',
      'Técnica': 'from-green-500/20 to-green-500/30 text-green-400 border-green-500/20',
      'História': 'from-yellow-500/20 to-yellow-500/30 text-yellow-400 border-yellow-500/20',
      'Guia': 'from-custom-orange/20 to-custom-orange/30 text-custom-orange border-custom-orange/20',
      'Lista': 'from-pink-500/20 to-pink-500/30 text-pink-400 border-pink-500/20',
      'Dicas': 'from-cyan-500/20 to-cyan-500/30 text-cyan-400 border-cyan-500/20'
    };
    return colors[category] || colors['Análise'];
  };

  return (
    <Layout>
      <SeoHead 
        type="blog"
        authors={['Escolha Meu Filme']}
        modifiedTime={new Date().toISOString()}
        section="Blog"
        keywords={blogKeywords}
      />
      
      <div className="py-24 relative overflow-hidden">
        {/* Background com múltiplas camadas */}
        <div className="absolute inset-0 z-0">
          {/* Gradiente principal */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/90 to-netflix-red/20 z-10" />
          
          {/* Imagem de fundo com cinema */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599128872-352222ec4b1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-15 z-0" />
          
          {/* Padrão geométrico sutil */}
          <div className="absolute inset-0 opacity-5 z-5" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #FFA500 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #e50914 0%, transparent 50%),
                             radial-gradient(circle at 75% 25%, #8B5CF6 0%, transparent 50%),
                             radial-gradient(circle at 25% 75%, #3B82F6 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }} />
          
          {/* Efeitos de brilho animados */}
          <div className="absolute inset-0 z-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-netflix-red/10 rounded-full blur-3xl animate-pulse-light" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-custom-orange/10 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="container-custom relative z-20">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-netflix-red bg-clip-text text-transparent">
              Blog Escolha Meu Filme
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Mergulhe no universo cinematográfico com nossas análises aprofundadas, críticas honestas e 
              descobertas exclusivas do mundo dos filmes.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Calendar className="w-4 h-4 text-netflix-red" />
                <span>Novos artigos toda semana</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <User className="w-4 h-4 text-custom-orange" />
                <span>Críticas especializadas</span>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="glass-card rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-netflix-red/30">
                <div className="p-6 relative">
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/5 via-transparent to-custom-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <span className={`inline-block bg-gradient-to-r ${getCategoryColor(post.category)} px-3 py-1 rounded-full text-xs font-medium border`}>
                      {post.category}
                    </span>
                    <span className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-netflix-red transition-colors relative z-10 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-white/80 text-sm mb-6 line-clamp-3 relative z-10">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={post.link}
                    className="inline-flex items-center gap-2 text-netflix-red hover:text-white transition-colors text-sm font-medium group relative z-10"
                  >
                    Continuar lendo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-16 text-center">
            <div className="glass-card rounded-xl p-8 max-w-3xl mx-auto border border-white/10 relative overflow-hidden">
              {/* Efeito de brilho de fundo */}
              <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/5 via-transparent to-custom-orange/5 opacity-50" />
              
              <h3 className="text-2xl font-semibold mb-6 relative z-10 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Sobre Nosso Blog
              </h3>
              <p className="text-white/90 mb-6 relative z-10">
                Nosso blog é dedicado a explorar todos os aspectos do cinema, desde análises profundas de filmes clássicos 
                até críticas dos lançamentos mais recentes. Cobrimos técnicas cinematográficas, história do cinema, 
                e oferecemos guias práticos para cinéfilos de todos os níveis.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm relative z-10">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-netflix-red to-custom-orange rounded-full mt-2 flex-shrink-0 shadow-lg shadow-netflix-red/20"></div>
                  <div className="text-white/90">
                    <strong className="text-white">Análises Técnicas:</strong> Fotografia, edição, som
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-custom-orange to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-custom-orange/20"></div>
                  <div className="text-white/90">
                    <strong className="text-white">Críticas Honestas:</strong> Visão imparcial e fundamentada
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-purple-500/20"></div>
                  <div className="text-white/90">
                    <strong className="text-white">História do Cinema:</strong> Das origens ao digital
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-netflix-red rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-500/20"></div>
                  <div className="text-white/90">
                    <strong className="text-white">Guias Práticos:</strong> Dicas para cinéfilos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
