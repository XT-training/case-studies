import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';

const config = {
  input: 'src/App.jsx',
  output: {
    format: 'cjs',
    file: 'dist/bundle.js'
  },
  external: ["react", "redux", "react-redux", "redux-saga", "prop-types"],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs({
      include: "node_modules/**"
    }),
    babel({
      exclude: "node_modules/**"
    }),
    sourcemaps()
  ]
}

export default config;
