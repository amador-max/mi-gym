import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_')
  const repository = env.VITE_REPOSITORY_NAME
  return { plugins: [vue()], base: repository && !repository.endsWith('.github.io') ? `/${repository}/` : '/' }
})
