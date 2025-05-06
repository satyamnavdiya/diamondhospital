import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),],
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react', 'ogl', 'framer-motion'],
  },
  server: {
    host: true, // or use your IP directly like '192.168.1.10'
    port: 5173, // or any other open port
  },
})
