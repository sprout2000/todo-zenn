import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
      },
      manifest: {
        name: 'Todo App (PWA)',
        short_name: 'Todo',
        description: 'Todo プログレッシブ・ウェブアプリ',
        id: '/todo/',
        start_url: '.',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#3f51b2',
        background_color: '#efeff4',
        screenshots: [
          {
            src: 'screen-shot.png',
            sizes: '709x1400',
            form_factor: 'narrow',
          },
          {
            src: 'screen-shot-wide.png',
            sizes: '1278x1508',
            form_factor: 'wide',
          },
        ],
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon-512x512-mask.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
});
