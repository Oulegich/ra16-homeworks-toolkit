import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/ra16-homeworks-toolkit',
  plugins: [react()
  ],
})
