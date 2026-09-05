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
        privacyPolicy: `${root}privacy-policy/index.html`,
        termsAndConditions: `${root}terms-and-conditions/index.html`,
      },
    },
  },
});
