import { Link } from 'react-router-dom';
import Header from '../assets/components/Header';
import HeroSection from '../assets/components/HeroSection';
import FeaturesSection from '../components/FeatureSection';
import HowItWorksSection from '../assets/components/HowItWorksSection';
import TestimonialsSection from '../assets/components/TestemonialSection';
import CtaSection from '../components/CtaSection';
import Footer from '../assets/components/Footer';
import SeoHead from '../assets/components/SeoHead';
import GoogleAd from '../components/GoogleAd';

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
      <div 
        className="fixed inset-0 -z-10 bg-black"
        style={{
          backgroundImage: 'url("/pcbg.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      <SeoHead 
        type="website"
        authors={['Escolha Meu Filme']}
        modifiedTime={new Date().toISOString()}
        keywords={homeKeywords}
      />
      
      <Header />
      <main className="flex-grow">
        <HeroSection 
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          description={heroContent.description}
        />
        
        <div className="container mx-auto px-4 py-4">
          <GoogleAd
            adClient="ca-pub-3744101723313882"
            adSlot="3744101723"
            contentSelector="main"
            minWordCount={100}
            allowedPaths={['/']}
            style={{ height: '250px' }}
          />
        </div>

        <FeaturesSection 
          title={featuresContent.title}
          features={featuresContent.features}
        />
        
        <div className="container mx-auto px-4 py-4">
          <GoogleAd
            adClient="ca-pub-3744101723313882"
            adSlot="3744101723"
            contentSelector="main"
            minWordCount={100}
            allowedPaths={['/']}
            style={{ height: '250px' }}
          />
        </div>

        <HowItWorksSection 
          title={howItWorksContent.title}
          steps={howItWorksContent.steps}
        />
        
        <TestimonialsSection />
        
        <div className="container mx-auto px-4 py-4">
          <GoogleAd
            adClient="ca-pub-3744101723313882"
            adSlot="3744101723"
            contentSelector="main"
            minWordCount={100}
            allowedPaths={['/']}
            style={{ height: '250px' }}
          />
        </div>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
