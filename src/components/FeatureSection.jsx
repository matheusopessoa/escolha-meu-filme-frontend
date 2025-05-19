
import React from 'react';
import { Film, User, Clock, List, Search, Award } from 'lucide-react';
import GoogleAd from './GoogleAd';

const FeatureSection = () => {
  const features = [
    {
      icon: <Film className="w-10 h-10 mb-4 text-netflix-red" />,
      title: "4000+ Filmes",
      description: "Uma enorme biblioteca de filmes cuidadosamente selecionados para todos os gostos"
    },
    {
      icon: <User className="w-10 h-10 mb-4 text-custom-orange" />,
      title: "Sem Cadastro",
      description: "Use o site imediatamente sem registros, logins ou dados pessoais"
    },
    {
      icon: <Clock className="w-10 h-10 mb-4 text-netflix-red" />,
      title: "Rápido e Fácil",
      description: "Encontre o filme perfeito em menos de um minuto com nossa interface intuitiva"
    },
    {
      icon: <List className="w-10 h-10 mb-4 text-custom-orange" />,
      title: "17 Gêneros",
      description: "De ação a romance, temos todos os gêneros para qualquer ocasião"
    },
    {
      icon: <Search className="w-10 h-10 mb-4 text-netflix-red" />,
      title: "Recomendações Personalizadas",
      description: "Obtenha sugestões baseadas em suas preferências de gênero e plataforma"
    },
    {
      icon: <Award className="w-10 h-10 mb-4 text-custom-orange" />,
      title: "100% Gratuito",
      description: "Todos os recursos disponíveis sem nenhum custo, para sempre"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-black/40 backdrop-blur-sm">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Por que escolher nossa plataforma?</h2>
          <p className="text-body max-w-2xl mx-auto">
            O Escolha Meu Filme simplifica sua noite de cinema com recursos incríveis e totalmente gratuitos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="section-subtitle mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="ad-container horizontal mx-auto">
            <GoogleAd 
              adSlot="3456789876"
              style={{ display: 'block', width: '100%', height: '90px' }}
              contentSelector="#features"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
