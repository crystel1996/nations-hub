import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@nations-hub/assets': path.resolve(__dirname, 'src/assets'),
      '@nations-hub/components': path.resolve(__dirname, 'src/components'),
      '@nations-hub/pages': path.resolve(__dirname, 'src/pages'),
      '@nations-hub/routes': path.resolve(__dirname, 'src/routes'),
      '@nations-hub/services': path.resolve(__dirname, 'src/services'),
      '@nations-hub/store': path.resolve(__dirname, 'src/store'),
      '@nations-hub/utils': path.resolve(__dirname, 'src/utils'),
    }
  }
})
