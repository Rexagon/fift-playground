import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import * as path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    checker({
      typescript: true
    })
  ],
  publicDir: path.resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@fift': path.resolve(__dirname, 'fift/pkg')
    }
  }
});
