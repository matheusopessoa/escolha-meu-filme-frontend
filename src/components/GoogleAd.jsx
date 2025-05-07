import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  min-height: ${props => props.height || '90px'};
`;

const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-align: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  text-align: center;
`;

const GoogleAd = ({ 
  adSlot, 
  adFormat = 'auto', 
  adLayout = 'in-article',
  adRegion = 'auto',
  fallbackMessage = 'Publicidade',
  style = {},
  height = '90px',
  contentSelector = '.centered-content, .flex.flex-col, article, .post-content, .movie-card, .movie-info'
}) => {
  const adRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  // Verifica se há conteúdo visível na tela
  useEffect(() => {
    const checkContentVisibility = () => {
      const content = document.querySelector(contentSelector);
      if (content) {
        const rect = content.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsContentVisible(isVisible);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsContentVisible(true);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    const content = document.querySelector(contentSelector);
    if (content) {
      observer.observe(content);
    }

    window.addEventListener('scroll', checkContentVisibility);
    checkContentVisibility();

    return () => {
      window.removeEventListener('scroll', checkContentVisibility);
      observer.disconnect();
    };
  }, [contentSelector]);

  // Observa a visibilidade do anúncio
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isContentVisible) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        observer.disconnect();
      }
    };
  }, [isContentVisible]);

  // Carrega o anúncio
  useEffect(() => {
    let timeoutId;

    const loadAd = () => {
      if (isVisible && !hasError && retryCount < MAX_RETRIES && isContentVisible) {
        try {
          if (!window.adsbygoogle) {
            const script = document.createElement('script');
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3744101723313882';
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.onerror = () => {
              setHasError(true);
              setRetryCount(prev => prev + 1);
              setIsLoading(false);
            };
            document.head.appendChild(script);
          }

          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setIsLoading(false);
        } catch (error) {
          console.error('Erro ao carregar anúncio:', error);
          setHasError(true);
          setRetryCount(prev => prev + 1);
          setIsLoading(false);
        }
      }
    };

    if (isVisible && !hasError && retryCount < MAX_RETRIES && isContentVisible) {
      timeoutId = setTimeout(loadAd, RETRY_DELAY * retryCount);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isVisible, hasError, retryCount, isContentVisible]);

  if (!isContentVisible) {
    return null;
  }

  if (isLoading) {
    return (
      <AdContainer ref={adRef} isVisible={false} height={height}>
        <LoadingContainer>
          Carregando...
        </LoadingContainer>
      </AdContainer>
    );
  }

  if (hasError && retryCount >= MAX_RETRIES) {
    return (
      <AdContainer ref={adRef} isVisible={false} height={height}>
        <FallbackContainer>
          {fallbackMessage}
        </FallbackContainer>
      </AdContainer>
    );
  }

  return (
    <AdContainer ref={adRef} isVisible={isVisible && isContentVisible} height={height}>
      {isVisible && !hasError && isContentVisible && (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            height: height,
            maxHeight: height,
            overflow: 'hidden',
            ...style
          }}
          data-ad-client="ca-pub-3744101723313882"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-ad-layout={adLayout}
          data-ad-region={adRegion}
          data-full-width-responsive="true"
        />
      )}
    </AdContainer>
  );
};

export default GoogleAd; 
