import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Township Business Tool',
        short_name: 'KasiTool',
        description: 'Run your business better.',
        theme_color: '#1A73E8',
        background_color: '#F8F9FA',
        display: 'standalone',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,ts,tsx}'],
        runtimeCaching: [
          {
            urlPattern: /.*\/data\/modules\.ts$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'module-data-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
