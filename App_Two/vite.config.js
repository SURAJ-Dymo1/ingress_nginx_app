import { defineConfig } from 'vite'   // 🔥 THIS IS MISSING
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/banana/",
  plugins: [react()],
})