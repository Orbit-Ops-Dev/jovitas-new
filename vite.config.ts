import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Recompresses every image (src/assets and public/) at build time; source files are untouched.
    ViteImageOptimizer({
      test: /\.(jpe?g|png|webp)$/i,
      jpeg: { quality: 75, mozjpeg: true },
      jpg: { quality: 75, mozjpeg: true },
      png: { quality: 80 },
      webp: { quality: 75 },
    }),
  ],
});
