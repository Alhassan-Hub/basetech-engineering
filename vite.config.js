import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // This is the correct one
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})