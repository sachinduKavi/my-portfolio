import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // three.js lives in its own lazily-loaded chunk, so its size doesn't block first paint
  build: { chunkSizeWarningLimit: 900 },
})
