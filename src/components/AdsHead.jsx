import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AdsHead = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Configuração global do Adsterra
    window.atOptions = {
      'key': 'b531b9b24d24432ee23694a934d7e3c8',
      'format': 'iframe',
      'height': 60,
      'width': 468,
      'params': {}
    };

    // Script principal do Adsterra
    const script = document.createElement('script');
    script.id = 'adsterra-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//www.highperformanceformat.com/b531b9b24d24432ee23694a934d7e3c8/invoke.js';
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const script = document.getElementById('adsterra-script');
      if (script) {
        script.remove();
      }
      delete window.atOptions;
    };
  }, []);

  return (
    <Helmet>
      {/* Meta tags para permitir anúncios */}
      <meta name="monetag" content="b531b9b24d24432ee23694a934d7e3c8" />
      <meta name="adsterra-verification" content="b531b9b24d24432ee23694a934d7e3c8" />
      
      {/* Permite carregamento de recursos de anúncios */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      
      {/* Script de configuração do Adsterra */}
      <script type="text/javascript">
        {`
          window.atOptions = {
            'key': 'b531b9b24d24432ee23694a934d7e3c8',
            'format': 'iframe',
            'height': 60,
            'width': 468,
            'params': {}
          };
        `}
      </script>
    </Helmet>
  );
};

export default AdsHead; 