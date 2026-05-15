import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use the GitHub Pages subpath only in GitHub Actions builds.
// Vercel and local builds should serve from the domain root.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/pte-landing/' : '/',
})
