import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Static-Pages-Scrimba-GRC-Fall2025/' // <-- exact, case-sensitive
})
