import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/D1921',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
