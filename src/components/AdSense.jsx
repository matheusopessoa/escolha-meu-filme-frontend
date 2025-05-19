import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function AdSense({ adClient, adSlot }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    if (!isHome) return;
    
    // Carrega o script do AdSense caso não exista
    if (!document.querySelector('script[src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      document.head.appendChild(s);
    }
    
    // Inicializa o anúncio
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Erro ao inicializar AdSense:', err);
    }
  }, [location.pathname, isHome]);
  
  // Só renderiza o anúncio na página inicial
  if (!isHome) return null;
  
  return (
    <ins 
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
      key={location.pathname}
    />
  );
}

export default AdSense; 