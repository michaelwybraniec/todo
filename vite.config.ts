/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
const isGithubPages = process.env.GITHUB_PAGES === 'true'
// https://vitejs.dev/config/
export default defineConfig({
  base: isGithubPages ? '/todo/' : '/',
  plugins: [
    react(),
    legacy()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
