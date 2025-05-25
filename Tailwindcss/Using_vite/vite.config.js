import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {},
    fontFamily: {
      Exile: ['Exile', 'sans-serif'],
    }
  },
  darkMode: "selector",
})
