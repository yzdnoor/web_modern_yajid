import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/praktik_web_modern/praktik-10/',
  plugins: [react()],
})
