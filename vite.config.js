
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  server: {
    port: 8080,
    https: false, // Run Vite over HTTP
    host: '0.0.0.0',
    hmr: {
      protocol: 'wss', // Use WSS for secure HMR (adjust in production)
      host: '192.168.2.249',
    },
    proxy: {
      '/api': {
        target: 'http://192.168.2.249:8000',
        changeOrigin: true,
      },
      '/ws': {
        target: 'ws://192.168.2.249:8000',
        ws: true,
        rewrite: (path) => path.replace(/^\/ws/, '/ws/messages'),
      }
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
