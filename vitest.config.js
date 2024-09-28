import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  test: {
    // ... Specify options here.
  },
  resolve: {
    alias: [
      {
        find: '@/models',
        replacement: path.resolve(__dirname, './src/models'),
      },
      {
        find: '@/mappers',
        replacement: path.resolve(__dirname, './src/mappers'),
      },
      {
        find: '@/validators',
        replacement: path.resolve(__dirname, './src/validators'),
      },
      {
        find: '@/constants',
        replacement: path.resolve(__dirname, './src/constants'),
      },
    ],
  },
  base: '/',
});
