import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import sourcemaps from 'rollup-plugin-sourcemaps';
import pkg from './package.json';

const config = {
  input: 'src/App.jsx',
  output: {
    format: 'cjs',
    file: pkg.main
  },
  external: [].concat(Object.keys(pkg.dependencies)),
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
