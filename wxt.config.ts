import { defineConfig } from 'wxt';

import { resolve } from 'path';
import fs from 'fs';

// Resolve the path for entrypointsDir
const entrypointsPath = resolve(__dirname, './src/entrypoints');

// Log the path and contents of the directory to debug
console.log('Entrypoints directory:', entrypointsPath);
try {
  console.log('Contents of entrypoints directory:', fs.readdirSync(entrypointsPath));
} catch (err) {
  console.error('Error reading entrypoints directory:', err);
}

export default defineConfig({
  // Define the directory where your entry points are located
  entrypointsDir: './src/entrypoints', // Use a directory, not an object

  // Define the output directory for the built files
  outDir: './dist', // Change to outDir for consistency with WXT

  // Resolve file extensions for import statements
  

  // Define the configuration for handling different types of modules (similar to Webpack)
  vite: (env) => ({
    plugins: [
      // Enable ts-loader for TypeScript and TSX files
      {
        name: 'vite-plugin-ts',
        apply: 'build',
        enforce: 'pre',
        transform(code, id) {
          if (/\.tsx?$/.test(id)) {
            return require('esbuild').transformSync(code, {
              loader: 'ts',
              target: 'es2015',
            });
          }
        }
      },
      // Enable handling of CSS files
      {
        name: 'vite-plugin-css',
        enforce: 'pre',
        transform(code, id) {
          if (/\.css$/.test(id)) {
            return require('esbuild').transformSync(code, {
              loader: 'css',
            });
          }
        }
      },
      // Enable handling of SVGs
      {
        name: 'vite-plugin-svgr',
        enforce: 'pre',
        transform(code, id) {
          if (/\.svg$/.test(id)) {
            return require('@svgr/core').transformSync(code);
          }
        }
      },
    ],
  }),
});
