import React from 'react';

const Sitemap = () => {
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://escolhameufilme.com/</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/escolher-filme</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/aleatorio</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/termos</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/aviso-legal</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/privacidade</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/como-escolhemos</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/top10</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/blog</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://escolhameufilme.com/sobre</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  // Retornar o XML como texto puro
  return (
    <pre style={{ 
      whiteSpace: 'pre-wrap', 
      wordWrap: 'break-word',
      fontFamily: 'monospace',
      fontSize: '12px',
      lineHeight: '1.4',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      color: '#333',
      margin: 0,
      minHeight: '100vh'
    }}>
      {sitemapXML}
    </pre>
  );
};

export default Sitemap; 