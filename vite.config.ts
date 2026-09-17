import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Actions proporciona GITHUB_REPOSITORY="usuario/repositorio".
// Fuera de Pages (npm run dev / build local), la base es /.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.GITHUB_PAGES === 'true' && repository
  ? repository.endsWith('.github.io') ? '/' : `/${repository}/`
  : '/'

export default defineConfig({ plugins: [vue()], base })
