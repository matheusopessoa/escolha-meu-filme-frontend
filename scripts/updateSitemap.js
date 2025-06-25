#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configurações
const BASE_URL = 'https://escolhameufilme.com';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Rotas do site
const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly'
  },
  {
    path: '/escolher-filme',
    priority: '0.9',
    changefreq: 'weekly'
  },
  {
    path: '/aleatorio',
    priority: '0.8',
    changefreq: 'weekly'
  },
  {
    path: '/termos',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/aviso-legal',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/privacidade',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/como-escolhemos',
    priority: '0.5',
    changefreq: 'monthly'
  },
  {
    path: '/top10',
    priority: '0.7',
    changefreq: 'weekly'
  },
  {
    path: '/blog',
    priority: '0.6',
    changefreq: 'weekly'
  },
  {
    path: '/sobre',
    priority: '0.5',
    changefreq: 'monthly'
  }
];

// Função para gerar o XML do sitemap
function generateSitemapXML() {
  const today = new Date().toISOString().split('T')[0];
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetEnd = '</urlset>';

  const urls = routes.map(route => {
    return `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return xmlHeader + '\n' + urlsetStart + '\n' + urls + '\n' + urlsetEnd;
}

// Função para notificar o Google
async function pingGoogle() {
  try {
    const response = await fetch(`https://www.google.com/ping?sitemap=${BASE_URL}/sitemap`);
    if (response.ok) {
      console.log('✅ Google foi notificado sobre o sitemap atualizado');
    } else {
      console.log('⚠️ Erro ao notificar Google');
    }
  } catch (error) {
    console.log('⚠️ Erro ao notificar Google:', error.message);
  }
}

// Função principal
async function updateSitemap() {
  try {
    console.log('🔄 Atualizando sitemap...');
    
    // Gerar novo sitemap
    const sitemapXML = generateSitemapXML();
    
    // Salvar arquivo
    fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf8');
    console.log('✅ Sitemap atualizado com sucesso!');
    
    // Notificar Google
    await pingGoogle();
    
    console.log('🎉 Processo concluído!');
    console.log(`📄 Sitemap disponível em: ${BASE_URL}/sitemap`);
    
  } catch (error) {
    console.error('❌ Erro ao atualizar sitemap:', error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  updateSitemap();
}

module.exports = {
  generateSitemapXML,
  updateSitemap,
  pingGoogle
}; 