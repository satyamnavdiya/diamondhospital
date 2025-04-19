import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react', 'framer-motion', 'VitePWA'],
  },
})
