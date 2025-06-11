import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
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
