import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANT:
  // Replace "my-react-site" with your GitHub repository name.
  base: '/amikagailmartija/',

  plugins: [react()],
})