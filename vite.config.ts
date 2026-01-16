import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // Minificação eficiente
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'lucide-react'], // Separa libs pesadas
          'ui': ['./components/ui/Button', './components/ui/CustomCursor'], // Separa UI comum
        }
      }
    }
  }
})