import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-workshop/',   // 👈 เพิ่มบรรทัดนี้
})