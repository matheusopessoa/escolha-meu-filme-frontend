import { useEffect } from 'react';
import useCanonicalUrl from '../../hooks/useCanonicalUrl';

const SeoHead = ({
  title: customTitle,
  description: customDescription,
  keywords: customKeywords,
  ogImage = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3",
  canonicalUrl: customCanonicalUrl,
  type = "website",
  locale = "pt_BR",
  siteName = "Escolha Meu Filme",
  publishedTime,
  modifiedTime,
  authors = [],
  section,
}) => {
  const { canonicalUrl, pageTitle, pageDescription, pageKeywords } = useCanonicalUrl();
  
  // Use custom values if provided, otherwise use defaults from useCanonicalUrl
  const finalTitle = customTitle || pageTitle;
  const finalDescription = customDescription || pageDescription;
  const finalCanonicalUrl = customCanonicalUrl || canonicalUrl;
  const finalKeywords = customKeywords || pageKeywords;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update meta tags
    const metaTags = {
      description: finalDescription,
      keywords: finalKeywords,
      "og:title": finalTitle,
      "og:description": finalDescription,
      "og:image": ogImage,
      "og:type": type,
      "og:locale": locale,
      "og:site_name": siteName,
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:section": section,
      "robots": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      "googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    };
    
    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return; // Skip if content is undefined
      
      let meta = document.querySelector(`meta[property="${name}"]`) || 
                 document.querySelector(`meta[name="${name}"]`);
                 
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('article:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Add canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (finalCanonicalUrl) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', finalCanonicalUrl);
    } else if (canonicalTag) {
      canonicalTag.remove();
    }
    
    // Add schema.org structured data
    const schemaData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebSite",
      "name": siteName,
      "headline": finalTitle,
      "description": finalDescription,
      "image": ogImage,
      "url": finalCanonicalUrl,
      "inLanguage": "pt-BR",
      "datePublished": publishedTime,
      "dateModified": modifiedTime,
      "author": authors.map(author => ({
        "@type": "Person",
        "name": author
      })),
      "publisher": {
        "@type": "Organization",
        "name": siteName,
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`
        }
      },
      "keywords": finalKeywords
    };

    if (type === "WebSite") {
      schemaData.potentialAction = {
        "@type": "SearchAction",
        "target": `${window.location.origin}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      };
    }

    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [
    finalTitle,
    finalDescription,
    finalKeywords,
    ogImage,
    finalCanonicalUrl,
    type,
    locale,
    siteName,
    publishedTime,
    modifiedTime,
    authors,
    section
  ]);
  
  return null;
};

export default SeoHead;
