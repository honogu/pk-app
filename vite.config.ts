import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.png'],
    manifest: {
      name: 'Praktikakohvik',
      short_name: 'Praktikakohvik',
      description: 'Praktikakohvik',
      theme_color: '#000000',
      background_color: '#ffffff',
      display: 'standalone',
      start_url:"/",
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes:'192x192',
          type:'image/png'
        },
        {
          src:'pwa-512x512.png',
          sizes:'512x512',
          type:'image/png'
        }
      ]
    }
  })],
})
