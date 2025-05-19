import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';

const AdContainer = styled.div`
  width: 100%;
  display: ${props => props.shouldShow ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  min-height: ${props => props.style?.height || '90px'};
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin: ${props => props.shouldShow ? '10px 0' : '0'};
  overflow: hidden;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
  position: relative;
  height: ${props => props.shouldShow ? 'auto' : '0'};

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
  min-height: ${props => props.style?.height || '90px'};
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
  min-height: ${props => props.style?.height || '90px'};
`;

const GoogleAd = ({ adClient, adSlot, style, contentSelector, minWordCount = 300, className, allowedPaths = ['/'] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [hasContent, setHasContent] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const adRef = useRef(null);
  const location = useLocation();

  const isAllowedPath = allowedPaths.includes(location.pathname);

  useEffect(() => {
    const checkContent = () => {
      if (!contentSelector) return true;

      const contentElement = document.querySelector(contentSelector);
      if (!contentElement) return false;

      const textContent = contentElement.textContent || '';
      const wordCount = textContent.trim().split(/\s+/).length;
      
      const visibleElements = contentElement.querySelectorAll('*');
      const hasVisibleContent = Array.from(visibleElements).some(el => {
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });

      const hasOriginalContent = Array.from(visibleElements).some(el => {
        const tagName = el.tagName.toLowerCase();
        return ['p', 'article', 'section', 'div'].includes(tagName) && 
               el.textContent.trim().length > 100;
      });

      return wordCount >= minWordCount && hasVisibleContent && hasOriginalContent;
    };

    setHasContent(checkContent());
  }, [contentSelector, minWordCount]);

  useEffect(() => {
    if (!isAllowedPath || !hasContent) return;

    if (!document.querySelector('script[src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }, [isAllowedPath, hasContent]);

  useEffect(() => {
    if (!isAllowedPath || !hasContent) return;

    const loadAd = () => {
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          setIsLoading(false);
          setAdLoaded(true);
        }
      } catch (err) {
        console.error('Erro ao carregar anúncio:', err);
        setError(true);
        setIsLoading(false);
        setAdLoaded(false);
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
      setAdLoaded(false);
    }
  }, [isVisible, retryCount, hasContent, isAllowedPath]);

  if (!isAllowedPath || !hasContent) return null;

  const shouldShowContainer = isLoading || (adLoaded && !error);

  return (
    <AdContainer 
      ref={adRef}
      isVisible={isVisible}
      style={style}
      className={cn("google-ad", className)}
      shouldShow={shouldShowContainer}
    >
      {isLoading ? (
        <LoadingContainer style={style}>Carregando anúncio...</LoadingContainer>
      ) : error ? (
        null
      ) : (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-3744101723313882"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
          key={location.pathname}
        />
      )}
    </AdContainer>
  );
};

export default GoogleAd;
