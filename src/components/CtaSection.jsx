import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3')] bg-cover bg-center opacity-30 z-0" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 z-0 bg-cover bg-center" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3")' }} />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para descobrir seu próximo filme favorito?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mais de 4.000 filmes esperam por você. E o melhor: é <span className="text-netflix-red font-semibold">100% gratuito</span> e sem cadastro.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 text-black">
                <Link to="/escolher-filme">Começar Agora</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Link to="/top10">Ver Top 10 Filmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
