import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },

    host: true, 
    
    allowedHosts: [
      'hemoweb.com.br',
      'www.hemoweb.com.br'
    ],
    
    hmr: {
      clientPort: 443
    },
    
    watch: {
      usePolling: true
    }
  }
})
