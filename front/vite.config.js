import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite acceder a la aplicación desde cualquier IP
    port: 3000,       // Define el puerto en el que debe escuchar la app
  },
})
