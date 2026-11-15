import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: base must match the repository name
export default defineConfig({
  plugins: [react()],
  base: '/egypt-family-trip/',
})
