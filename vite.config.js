import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/react-portfolio-guillermo/", // Adjust this to match your deployment path
  plugins: [react()],
});