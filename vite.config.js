import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "RTSV - SDA Dimond Hospital",
        short_name: "Dimond Hospital",
        description: "Hospital Management App",
        theme_color:"#325082",
        background_color: "#fff",
        display: "standalone",
        start_url: "/diamondhospital",
        icons: [
          {
            src: "/diamondhospital/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/diamondhospital/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/satyamnavdiya\.github\.io\/Hospital\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "hospital-cache",
            },
          },
        ],
      },
    }),
  ],
  base: '/diamondhospital',
  optimizeDeps: {
    exclude: ['lucide-react', 'framer-motion', ],
  },
})
