import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  // Configuração para servir sitemap.xml com content-type correto
  configureServer: (server) => {
    server.middlewares.use('/sitemap', (req, res, next) => {
      // Redirecionar /sitemap para /sitemap.xml
      res.writeHead(302, {
        'Location': '/sitemap.xml'
      });
      res.end();
    });
  }
}))
