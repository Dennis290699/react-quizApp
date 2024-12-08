import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          quiz: ['./src/store/quizStore.ts', './src/components/QuizQuestion.tsx', './src/components/QuizResults.tsx'],
        }
      }
    }
  }
});