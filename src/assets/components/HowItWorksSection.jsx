import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorksSection = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Como Funciona</h2>
          <p className="text-body max-w-2xl mx-auto">
            Em apenas 3 passos simples, você encontra o filme perfeito para o seu momento.
            Sem complicações, sem cadastros, direto ao ponto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="glass-card rounded-xl p-8 text-center relative">
            <div className="absolute -top-4 -left-4 bg-netflix-red w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">1</div>
            <img 
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Selecione sua plataforma de streaming" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Selecione sua plataforma</h3>
            <p className="text-white/70">
              Filtre por Netflix, Prime Video, Disney+ ou outras plataformas disponíveis.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 text-center relative">
            <div className="absolute -top-4 -left-4 bg-netflix-red w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">2</div>
            <img 
              src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Escolha seu tipo de filme" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Selecione seu estilo</h3>
            <p className="text-white/70">
              Decida se quer filmes populares e aclamados pelo público ou obras cult e aclamadas pela crítica.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 text-center relative">
            <div className="absolute -top-4 -left-4 bg-netflix-red w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">3</div>
            <img 
              src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Escolha seu gênero favorito" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Selecione o gênero</h3>
            <p className="text-white/70">
              Selecione entre os 17 gêneros disponíveis, desde ação até documentários.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 text-center relative">
            <div className="absolute -top-4 -left-4 bg-netflix-red w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">4</div>
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3" 
              alt="Descubra filmes incríveis" 
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold mb-3">Descubra seu filme</h3>
            <p className="text-white/70">
              Receba recomendações personalizadas e escolha o filme perfeito para seu momento.
            </p>
          </div>
        </div>
        
        <div className="text-center">
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
        
        <div className="mt-16">
          <div className="glass-card rounded-xl p-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="section-subtitle mb-4">Não consegue decidir?</h3>
              <p className="text-body mb-6">
                Experimente nosso modo aleatório! Com apenas um clique, deixe que escolhamos um filme 
                surpresa para você baseado em filmes populares e bem avaliados.
              </p>
              <Button asChild className="btn-secondary">
                <Link to="/aleatorio">Modo Aleatório</Link>
              </Button>
            </div>
            <div className="glass-card rounded-lg p-2 transform rotate-2 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Modo aleatório" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
