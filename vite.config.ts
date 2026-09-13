import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

export default defineConfig({
  base: '/Indian-art-map/',
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('three') || id.includes('@react-three')) {
            return 'vendor-three';
          }
          if (id.includes('react/') || id.includes('react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('lucide-react') || id.includes('gsap')) {
            return 'vendor-ui';
          }
        }
      }
    }
  }
})

