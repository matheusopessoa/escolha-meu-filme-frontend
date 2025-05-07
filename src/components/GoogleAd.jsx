import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const AdContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.style?.height || '90px'};
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin: 10px 0;
  overflow: hidden;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  position: relative;

  &::before {
    content: 'Publicidade';
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  text-align: center;
  padding: 10px;
`;

const GoogleAd = ({ adSlot, style, contentSelector }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [hasContent, setHasContent] = useState(false);
  const adRef = useRef(null);
  const observerRef = useRef(null);
  const contentObserverRef = useRef(null);

  // Verifica se há conteúdo suficiente na página
  useEffect(() => {
    const checkContent = () => {
      if (!contentSelector) return true;

      const contentElement = document.querySelector(contentSelector);
      if (!contentElement) return false;

      // Verifica se há texto suficiente
      const textContent = contentElement.textContent || '';
      const wordCount = textContent.trim().split(/\s+/).length;
      
      // Verifica se há elementos visíveis
      const visibleElements = contentElement.querySelectorAll('*');
      const hasVisibleContent = Array.from(visibleElements).some(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });

      return wordCount >= 50 && hasVisibleContent;
    };

    setHasContent(checkContent());
  }, [contentSelector]);

  useEffect(() => {
    if (!hasContent) return;

    const checkContentVisibility = () => {
      if (!contentSelector) return true;

      const contentElement = document.querySelector(contentSelector);
      if (!contentElement) return false;

      const rect = contentElement.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    contentObserverRef.current = new IntersectionObserver(
      (entries) => {
        const isContentVisible = entries[0].isIntersecting;
        if (isContentVisible && !isVisible && hasContent) {
          setIsVisible(true);
        } else if (!isContentVisible && isVisible) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '50px'
      }
    );

    const contentElement = document.querySelector(contentSelector);
    if (contentElement) {
      contentObserverRef.current.observe(contentElement);
    }

    return () => {
      if (contentObserverRef.current) {
        contentObserverRef.current.disconnect();
      }
    };
  }, [contentSelector, isVisible, hasContent]);

  useEffect(() => {
    if (!isVisible || !hasContent) return;

    const loadAd = () => {
      try {
        if (window.adsbygoogle && process.env.NODE_ENV !== 'development') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Erro ao carregar anúncio:', err);
        setError(true);
        setIsLoading(false);
      }
    };

    if (retryCount < 3) {
      const timer = setTimeout(() => {
        loadAd();
      }, 2000 * (retryCount + 1));

      return () => clearTimeout(timer);
    } else {
      setError(true);
      setIsLoading(false);
    }
  }, [isVisible, retryCount, hasContent]);

  useEffect(() => {
    if (!isVisible || !hasContent) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && !error) {
          setRetryCount(prev => prev + 1);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '50px'
      }
    );

    if (adRef.current) {
      observerRef.current.observe(adRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible, isLoading, error, hasContent]);

  if (!isVisible || !hasContent) return null;

  return (
    <AdContainer style={style} isVisible={isVisible}>
      {isLoading && !error ? (
        <LoadingContainer>Carregando...</LoadingContainer>
      ) : error ? (
        <FallbackContainer>
          Não foi possível carregar o anúncio. Por favor, tente novamente mais tarde.
        </FallbackContainer>
      ) : (
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={style}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </AdContainer>
  );
};

export default GoogleAd; 
