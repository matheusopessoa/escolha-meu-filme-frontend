import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-50 z-0" />
      </div>
      
      <div className="container-custom relative z-20 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Não sabe o que assistir? Nós escolhemos para você.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Somos o Escolha Meu Filme, o melhor recomendador de filmes do Brasil.
            <span className="text-netflix-red font-semibold"> 100% gratuito</span>, sem cadastro e sem complicações.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              className="btn-primary text-xl md:text-2xl px-8 py-8 text-black font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
              style={{
                background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)',
                boxShadow: '0 20px 40px rgba(255, 215, 0, 0.3), 0 0 0 1px rgba(255, 215, 0, 0.1)',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                animation: 'pulse 2s infinite'
              }}
            >
              <Link to="/escolher-filme" className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Encontrar um Filme
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="p-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 animate-float">
              <p className="text-white/80 text-sm">Mais de 4.000 filmes em nosso catálogo</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-pulse-light">
        <a href="#features" className="text-white flex flex-col items-center">
          <span className="text-sm mb-2">Descubra mais</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
