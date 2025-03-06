/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  optimizeDeps: {
    exclude:['@bh-digitalsolutions/ui-toolkit/loader']
    } ,build: {
    rollupOptions: {
    output: {
    chunkFileNames: (asset) => {
    return asset.name.includes('bh-') ? 'assets/[name].js' : '[name]-[hash].js'
    }
    }
    }
    }
})
// optimizeDeps: {
//   exclude:['@bh-digitalsolutions/ui-toolkit/loader']
//   } ,build: {
//   rollupOptions: {
//   output: {
//   chunkFileNames: (asset) => {
//   return asset.name.includes('bh-') ? 'assets/[name].js' : '[name]-[hash].js'
//   }
//   }
//   }
//   }