import { macaronVitePlugin } from '@macaron-css/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [macaronVitePlugin(), react()],
  server: {
    port: 3000,
  },
})
