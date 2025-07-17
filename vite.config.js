// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'sololevelling', // You likely already have this
    port: 5173,           // And this (Vite's default)
    allowedHosts: ['sololevelling'], // <--- Add this line
  },
});