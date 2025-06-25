import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Escolha Meu Filme",
    "url": "https://escolhameufilme.com",
    "logo": "https://escolhameufilme.com/logo.png",
    "description": "O melhor recomendador de filmes do Brasil. Encontre o filme perfeito para assistir hoje, de forma gratuita e sem complicações.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contato@escolhameufilme.com",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://escolhameufilme.com/sobre",
      "https://escolhameufilme.com/contato",
      "https://escolhameufilme.com/termos",
      "https://escolhameufilme.com/privacidade"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Escolha Meu Filme",
    "url": "https://escolhameufilme.com",
    "description": "Recomendador de filmes gratuito e sem cadastro",
    "inLanguage": "pt-BR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://escolhameufilme.com/escolher-filme",
      "query-input": "required name=search_term_string"
    }
  };

  const legalPagesData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Páginas Legais",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebPage",
          "name": "Termos de Uso",
          "url": "https://escolhameufilme.com/termos",
          "description": "Termos de uso do site Escolha Meu Filme"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebPage",
          "name": "Política de Privacidade",
          "url": "https://escolhameufilme.com/privacidade",
          "description": "Política de privacidade do site Escolha Meu Filme"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebPage",
          "name": "Aviso Legal",
          "url": "https://escolhameufilme.com/aviso-legal",
          "description": "Aviso legal sobre o funcionamento do site"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebPage",
          "name": "Contato",
          "url": "https://escolhameufilme.com/contato",
          "description": "Página de contato do site Escolha Meu Filme"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "WebPage",
          "name": "Sobre Nós",
          "url": "https://escolhameufilme.com/sobre",
          "description": "Informações sobre o site Escolha Meu Filme"
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(legalPagesData)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 