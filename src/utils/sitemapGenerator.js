// Gerador de Sitemap dinâmico para React
// Baseado nas melhores práticas de SEO

const BASE_URL = 'https://escolhameufilme.com';

// Lista de rotas do site
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/escolher-filme',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/aleatorio',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/termos',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/aviso-legal',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/privacidade',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/como-escolhemos',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/top10',
    priority: '0.7',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/blog',
    priority: '0.6',
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    path: '/sobre',
    priority: '0.5',
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Função para gerar o XML do sitemap
export const generateSitemapXML = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetEnd = '</urlset>';

  const urls = routes.map(route => {
    return `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('');

  return xmlHeader + urlsetStart + urls + urlsetEnd;
};

// Função para notificar o Google sobre mudanças no sitemap
export const pingGoogleSitemap = async () => {
  try {
    const response = await fetch(`https://www.google.com/ping?sitemap=${BASE_URL}/sitemap`);
    if (response.ok) {
      console.log('Google foi notificado sobre o sitemap atualizado');
    }
  } catch (error) {
    console.error('Erro ao notificar Google sobre sitemap:', error);
  }
};

// Função para verificar se o sitemap está acessível
export const checkSitemapAccessibility = async () => {
  try {
    const response = await fetch(`${BASE_URL}/sitemap`);
    if (response.ok) {
      console.log('Sitemap está acessível');
      return true;
    }
  } catch (error) {
    console.error('Erro ao acessar sitemap:', error);
  }
  return false;
};

// Função para adicionar uma nova rota ao sitemap
export const addRouteToSitemap = (newRoute) => {
  routes.push({
    ...newRoute,
    lastmod: new Date().toISOString().split('T')[0]
  });
};

export default {
  generateSitemapXML,
  pingGoogleSitemap,
  checkSitemapAccessibility,
  addRouteToSitemap,
  routes
}; 