import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/pte-landing/' : '/',
  build: {
    // Code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'router'
            if (id.includes('react-dom') || id.includes('react/index')) return 'react'
            if (id.includes('lucide-react')) return 'icons'
            return 'vendor'
          }
        },
      },
    },
    // Optimize chunk size warning
    chunkSizeWarningLimit: 500,
  },
})
