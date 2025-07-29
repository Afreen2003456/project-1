import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDevelopment = command === 'serve'
  const isProduction = mode === 'production'
  
  return {
    plugins: [
      react({
        // Enable React Fast Refresh
        fastRefresh: isDevelopment,
        // Include .jsx files
        include: "**/*.{jsx,tsx}",
      })
    ],
    
    // Skip TypeScript checking during build
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
      ...(isProduction && {
        drop: ['console', 'debugger'],
        minifyIdentifiers: true,
        minifySyntax: true,
        minifyWhitespace: true,
      }),
    },
    
    // Base URL for GitHub Pages deployment
    base: process.env.GITHUB_ACTIONS ? '/react-developer-assignment/' : '/',
    
    // Path resolution
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@contexts': resolve(__dirname, 'src/contexts'),
        '@types': resolve(__dirname, 'src/types'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@assets': resolve(__dirname, 'src/assets'),
      },
    },
    
    // Development server configuration
    server: {
      port: 3000,
      host: true, // Allow external connections
      open: true, // Auto-open browser
      cors: true,
      // Proxy configuration for development
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    
    // Preview server configuration
    preview: {
      port: 4173,
      host: true,
      open: true,
    },
    
    // Build configuration
    build: {
      outDir: 'dist',
      sourcemap: isDevelopment || process.env.VITE_SOURCEMAP === 'true',
      minify: isProduction ? 'esbuild' : false,
      target: 'es2020',
      
      // Rollup options for better optimization
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          // Better chunk splitting
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'router-vendor': ['react-router-dom'],
          },
          // Asset naming
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name?.split('.') || []
            let extType = info[info.length - 1]
            
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name || '')) {
              extType = 'media'
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(assetInfo.name || '')) {
              extType = 'images'
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name || '')) {
              extType = 'fonts'
            }
            
            return `assets/${extType}/[name].[hash][extname]`
          },
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
        },
      },
      
      // Build optimizations
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096,
      
      // CSS configuration
      cssCodeSplit: true,
      cssMinify: isProduction,
    },
    
    // Optimization configuration
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
      ],
      exclude: [],
    },
    
    // Environment variables
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __COMMIT_HASH__: JSON.stringify(process.env.GITHUB_SHA || 'dev'),
    },
    
    // CSS configuration
    css: {
      devSourcemap: isDevelopment,
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
    },
    
    // Test configuration
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      css: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'src/test/',
          '**/*.d.ts',
          '**/*.test.{ts,tsx}',
          '**/*.spec.{ts,tsx}',
        ],
      },
    },
    

    
    // Worker configuration
    worker: {
      format: 'es',
    },
    
    // JSON configuration
    json: {
      namedExports: true,
      stringify: false,
    },
  }
}) 