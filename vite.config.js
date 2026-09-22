import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: `${root}index.html`,
        work: `${root}work/index.html`,
        fold: `${root}work/the-fold/index.html`,
        contact: `${root}contact/index.html`,
        privacyPolicy: `${root}privacy-policy/index.html`,
        termsAndConditions: `${root}terms-and-conditions/index.html`,
      },
    },
  },
});
