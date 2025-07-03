
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const featuredPosts = [
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
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="blog">
      {/* Background com múltiplas camadas para um visual mais rico */}
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
        
        {/* Efeito de brilho animado */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-netflix-red/10 rounded-full blur-3xl animate-pulse-light" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-custom-orange/10 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse-light" style={{ animationDelay: '2s' }} />
        </div>
      </div>
      
      <div className="container-custom relative z-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="section-title bg-gradient-to-r from-white via-white to-netflix-red bg-clip-text text-transparent">
            Blog Escolha Meu Filme
          </h2>
          <p className="text-body max-w-3xl mx-auto mb-8 text-white/90">
            Mergulhe no universo cinematográfico com nossas análises aprofundadas, críticas honestas e 
            descobertas exclusivas. Do cinema clássico aos lançamentos mais recentes, exploramos cada 
            frame com paixão e conhecimento para trazer a você o melhor do mundo dos filmes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <Calendar className="w-4 h-4 text-netflix-red" />
              <span>Novos artigos toda semana</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <User className="w-4 h-4 text-custom-orange" />
              <span>Críticas especializadas</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <article key={index} className="glass-card rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 border border-white/10 hover:border-netflix-red/30">
              <div className="p-6 relative">
                {/* Efeito de brilho no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/5 via-transparent to-custom-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="flex items-center justify-between mb-3 relative z-10">
                  <span className="inline-block bg-gradient-to-r from-netflix-red/20 to-netflix-red/30 text-netflix-red px-3 py-1 rounded-full text-xs font-medium border border-netflix-red/20">
                    {post.category}
                  </span>
                  <span className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-netflix-red transition-colors relative z-10 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-3 relative z-10">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={post.link}
                  className="inline-flex items-center gap-2 text-netflix-red hover:text-white transition-colors text-sm font-medium group relative z-10"
                >
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto mb-8 border border-white/10 relative overflow-hidden">
            {/* Efeito de brilho de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-netflix-red/5 via-transparent to-custom-orange/5 opacity-50" />
            
            <h3 className="text-2xl font-semibold mb-4 relative z-10 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Por que seguir nosso blog?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm relative z-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-netflix-red to-custom-orange rounded-full mt-2 flex-shrink-0 shadow-lg shadow-netflix-red/20"></div>
                <div className="text-white/90">
                  <strong className="text-white">Análises profundas:</strong> Críticas detalhadas que vão além da superfície
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-custom-orange to-netflix-red rounded-full mt-2 flex-shrink-0 shadow-lg shadow-custom-orange/20"></div>
                <div className="text-white/90">
                  <strong className="text-white">Novidades em primeira mão:</strong> Fique por dentro dos lançamentos
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-netflix-red to-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-netflix-red/20"></div>
                <div className="text-white/90">
                  <strong className="text-white">Clássicos atemporais:</strong> Redescubra joias do cinema mundial
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-custom-orange rounded-full mt-2 flex-shrink-0 shadow-lg shadow-purple-500/20"></div>
                <div className="text-white/90">
                  <strong className="text-white">Opinião especializada:</strong> Perspectivas únicas sobre arte cinematográfica
                </div>
              </div>
            </div>
          </div>
          
          <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 text-white bg-gradient-to-r from-netflix-red to-netflix-redHover hover:from-netflix-redHover hover:to-netflix-red transition-all duration-300 shadow-lg shadow-netflix-red/25 hover:shadow-netflix-red/40 transform hover:scale-105">
            <Link to="/blog">Explorar Todo o Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
