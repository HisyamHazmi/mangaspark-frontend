import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Works for both Vercel (root path) and GitHub Pages (subpath)
export default defineConfig({
plugins: [react()],
base: process.env.VERCEL ? '/' : '/mangaspark-frontend/',
})