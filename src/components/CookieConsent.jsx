import { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
    });
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        backgroundColor: 'rgba(17, 24, 39, 0.95)', // escuro com opacidade
        color: 'white',
        padding: '16px 24px',
        backdropFilter: 'blur(4px)',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            flex: 1,
            fontSize: '14px',
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
          <a
            href="/termos-de-uso"
            style={{
              color: '#34D399',
              textDecoration: 'underline',
              fontWeight: 500,
            }}
          >
            política de privacidade
          </a>
          .
        </p>

        <button
          onClick={handleAccept}
          style={{
            backgroundColor: '#10B981', // emerald-500
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 600,
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#059669')} // hover emerald-600
          onMouseOut={(e) => (e.target.style.backgroundColor = '#10B981')}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
