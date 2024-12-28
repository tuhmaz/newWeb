import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import html from '@rollup/plugin-html';
import { glob } from 'glob';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

/**
 * Get Files from a directory
 * @param {string} query
 * @returns array
 */
function GetFilesArray(query) {
  return Array.from(new Set(glob.sync(query))); // Remove duplicate files by using Set initially
}

// File paths to be collected
const fileQueries = {
  pageJsFiles: 'resources/assets/js/*.js',
  vendorJsFiles: 'resources/assets/vendor/js/*.js',
  libsJsFiles: 'resources/assets/vendor/libs/**/*.js',
  coreScssFiles: 'resources/assets/vendor/scss/**/!(_)*.scss',
  libsScssFiles: 'resources/assets/vendor/libs/**/!(_)*.scss',
  libsCssFiles: 'resources/assets/vendor/libs/**/*.css',
  fontsScssFiles: 'resources/assets/vendor/fonts/!(_)*.scss',
  customJsFiles: 'resources/js/*.js'
};

// Collect all files
const files = Object.entries(fileQueries).reduce((acc, [key, query]) => {
  acc[key] = GetFilesArray(query);
  return acc;
}, {});

function collectInputFiles() {
  return [
    'resources/assets/css/edu.css',
    'resources/js/app.js',
    ...Object.values(files).flat(), // Flatten all arrays into one
  ];
}

// Processing Window Assignment for Libs like jKanban, pdfMake
function libsWindowAssignment() {
  return {
    name: 'libsWindowAssignment',
    transform(src, id) {
      const replacements = {
        'jkanban.js': ['this.jKanban', 'window.jKanban'],
        'vfs_fonts': ['this.pdfMake', 'window.pdfMake'],
      };

      for (const [file, [search, replace]] of Object.entries(replacements)) {
        if (id.includes(file)) {
          return {
            code: src.replace(search, replace),
            map: null
          };
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [
    laravel({
      input: collectInputFiles(),
      refresh: true,
    }),
    libsWindowAssignment(),
    terser(),
    visualizer(),
    viteCompression()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources'),
      '~': path.resolve(__dirname, 'resources/assets'),
      'typeahead.js/dist/typeahead.bundle': path.resolve(__dirname, 'node_modules/typeahead.js/dist/typeahead.bundle.min.js')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['jquery', 'bootstrap', '@popperjs/core', 'apexcharts']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 0,
    emptyOutDir: false,
    minify: true,
  },
  optimizeDeps: {
    include: ['jquery', 'bootstrap']
  }
});
