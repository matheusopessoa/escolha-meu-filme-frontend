import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdsHead = () => {
  useEffect(() => {
    // Verifica se o script já existe para evitar duplicação
    if (typeof window !== 'undefined' && !document.getElementById('adsterra-script')) {
      const script = document.createElement('script');
      script.id = 'adsterra-script';
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//www.highperformancedformats.com/b531b9b24d24432ee23694a934d7e3c8/invoke.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Helmet>
      {/* Meta tags para permitir anúncios */}
      <meta name="monetag" content="b531b9b24d24432ee23694a934d7e3c8" />
      <meta name="adsterra-verification" content="b531b9b24d24432ee23694a934d7e3c8" />
      
      {/* Permite carregamento de recursos de anúncios */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Helmet>
  );
};

export default AdsHead; 