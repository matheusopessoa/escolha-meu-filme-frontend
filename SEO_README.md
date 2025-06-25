# SEO e Sitemap - Escolha Meu Filme

## 📋 Sobre o Sitemap

Este projeto inclui um sitemap completo para melhorar o SEO e aumentar as chances de aprovação no Google Ads.

## 🗂️ Arquivos Criados

### 1. `public/sitemap.xml`
- Sitemap estático com todas as páginas do site
- Acessível em: `https://escolha-meu-filme.vercel.app/sitemap.xml`

### 2. `public/robots.txt`
- Orienta os crawlers sobre como indexar o site
- Indica a localização do sitemap

### 3. `src/utils/sitemapGenerator.js`
- Gerador dinâmico de sitemap
- Funções para notificar o Google
- Utilitários para verificar acessibilidade

### 4. `scripts/updateSitemap.js`
- Script para atualizar o sitemap automaticamente
- Notifica o Google sobre mudanças

## 🚀 Como Usar

### Atualizar o Sitemap Manualmente
```bash
npm run update-sitemap
```

### Verificar se o Sitemap está Acessível
```javascript
import { checkSitemapAccessibility } from './src/utils/sitemapGenerator.js';

// Verificar se o sitemap está funcionando
const isAccessible = await checkSitemapAccessibility();
console.log('Sitemap acessível:', isAccessible);
```

### Notificar o Google sobre Mudanças
```javascript
import { pingGoogleSitemap } from './src/utils/sitemapGenerator.js';

// Notificar Google sobre atualizações
await pingGoogleSitemap();
```

## 📊 Estrutura do Sitemap

### Páginas Principais (Alta Prioridade)
- **Homepage** (`/`) - Prioridade: 1.0
- **Escolher Filme** (`/escolher-filme`) - Prioridade: 0.9
- **Modo Aleatório** (`/aleatorio`) - Prioridade: 0.8

### Páginas Legais (Baixa Prioridade)
- **Termos de Uso** (`/termos-de-uso`) - Prioridade: 0.5
- **Aviso Legal** (`/aviso-legal`) - Prioridade: 0.5
- **Política de Privacidade** (`/privacidade`) - Prioridade: 0.5

## 🔍 Configuração do Google Search Console

1. **Acesse**: [Google Search Console](https://search.google.com/search-console)
2. **Adicione sua propriedade**: `https://escolha-meu-filme.vercel.app`
3. **Verifique a propriedade** (recomendado via DNS)
4. **Envie o sitemap**: 
   - Vá em "Sitemaps"
   - Adicione: `https://escolha-meu-filme.vercel.app/sitemap.xml`

## 📈 Benefícios para Google Ads

### ✅ Melhora a Qualidade do Site
- **Indexação completa**: Google encontra todas as páginas
- **Estrutura clara**: Hierarquia de páginas bem definida
- **Conteúdo organizado**: Fácil navegação para crawlers

### ✅ Aumenta a Pontuação de Qualidade
- **Relevância**: Páginas bem categorizadas
- **Experiência do usuário**: Navegação clara
- **Conformidade**: Termos e avisos legais acessíveis

### ✅ Facilita a Aprovação
- **Transparência**: Google entende o propósito do site
- **Conformidade legal**: Páginas de termos e privacidade
- **Profissionalismo**: Site bem estruturado

## 🔧 Manutenção

### Atualizar Rotas
Para adicionar novas páginas ao sitemap:

1. **Edite** `scripts/updateSitemap.js`
2. **Adicione** a nova rota no array `routes`
3. **Execute**: `npm run update-sitemap`

### Exemplo de Nova Rota
```javascript
{
  path: '/nova-pagina',
  priority: '0.7',
  changefreq: 'weekly'
}
```

## 📱 Verificação

### Testar o Sitemap
1. Acesse: `https://escolha-meu-filme.vercel.app/sitemap.xml`
2. Verifique se o XML está bem formatado
3. Confirme se todas as URLs estão corretas

### Testar o Robots.txt
1. Acesse: `https://escolha-meu-filme.vercel.app/robots.txt`
2. Verifique se o sitemap está referenciado

## 🎯 Próximos Passos

1. **Configurar Google Search Console**
2. **Enviar sitemap para indexação**
3. **Monitorar performance no Search Console**
4. **Atualizar sitemap quando adicionar novas páginas**

## 📞 Suporte

Para dúvidas sobre SEO ou sitemap, consulte:
- [Google Search Console Help](https://support.google.com/webmasters/)
- [Sitemap Guidelines](https://www.sitemaps.org/)

---

**Última atualização**: 19/12/2024 