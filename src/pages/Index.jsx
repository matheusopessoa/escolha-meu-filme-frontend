import { Link } from 'react-router-dom';
import Header from '../assets/components/Header';
import HeroSection from '../assets/components/HeroSection';
import FeaturesSection from '../components/FeatureSection';
import HowItWorksSection from '../assets/components/HowItWorksSection';
import TestimonialsSection from '../assets/components/TestemonialSection';
import CtaSection from '../components/CtaSection';
import Footer from '../assets/components/Footer';
import SeoHead from '../assets/components/SeoHead';

const Index = () => {
  const homeKeywords = 'recomendador de filmes, escolha meu filme, filmes gratuitos, filmes sem cadastro, ' +
    'recomendação inteligente de filmes, sistema recomendador, recomendador personalizado, ' +
    'escolher filme, filme para assistir hoje, recomendação de filme, sugestão de filme, ' +
    'filme netflix, filme prime video, filme disney plus, filme hbo max, filme globoplay, filme online, ' +
    'filme streaming, filme para ver hoje, filme bom para assistir, filme novo, lançamento filme, filme 2024, ' +
    'filme para casal, filme em família, filme para assistir em casa, filme gratuito, filme sem cadastro, ' +
    'filme por gênero, filme por streaming, filme por categoria, filme por plataforma, filme por preferência, ' +
    'filme por gosto, filme por avaliação, filme por nota, filme por popularidade, filme por lançamento, ' +
    'filme por idioma, filme dublado, filme legendado, filme nacional, filme internacional';

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-['Poppins',sans-serif]">
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0"
          style={{
            background: 'rgb(17, 24, 39)',
            backgroundImage: `
              linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(31, 17, 17) 50%, rgb(17, 24, 39) 100%),
              radial-gradient(circle at 50% 0%, rgba(220, 38, 38, 0.15) 0%, rgba(17, 24, 39, 0) 70%)
            `
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.5,
            animation: 'grain 8s steps(10) infinite'
          }}
        />
      </div>
      
      <SeoHead 
        type="website"
        authors={['Escolha Meu Filme']}
        modifiedTime={new Date().toISOString()}
        keywords={homeKeywords}
      />
      
      <Header />
      <main className="flex-grow">
        <HeroSection />

        <FeaturesSection />

        <HowItWorksSection />
        
        <TestimonialsSection />

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
