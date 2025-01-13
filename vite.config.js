import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'assets': '/src/Assets',
      'components': '/src/Components',
      'page': '/src/page',
      'hooks': '/src/hooks',
      'flow': '/src/flows',
    },
  },
})
