import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

const reducedInfo = true; // set to false to get more info during runtime

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bookmarklet.js',
    format: 'iife', // outputs a immediately-invoked function expression and wraps the code in a function so it doesn't pollute the global scope
    sourcemap: !reducedInfo, // creates a sourcemap file so you can debug the code in the browser, not useful for a bookmarklet
  },
  plugins: [
    postcss({ // adds support for bunding CSS files in JS files
      extensions: [ '.css' ],
      minimize: reducedInfo,
      plugins: [
        autoprefixer() // adds vendor prefixes to CSS so it should work in all browsers
      ],
    }),
    resolve(), // adds support for bundling Node modules
    typescript({
      tsconfig: "tsconfig.json",
    }),
    commonjs(), // adds support for bundling CommonJS files
    terser({ // minifies the output JS https://github.com/terser/terser#minify-options
      compress: {
        drop_console: reducedInfo, // removes console.log statements
        drop_debugger: reducedInfo, // removes console.debug statements
        passes: (reducedInfo * 2), // number of passes to run (only wheb reducedInfo is true, then its 1 * x passes)
      },
      format: {
        comments: !reducedInfo, // removes comments
        beautify: !reducedInfo, // beautifies the code
      }
    })
  ]
};
