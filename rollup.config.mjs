import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import gzipPlugin from 'rollup-plugin-gzip'

export default ['contract', 'script', 'predicate', 'wallet', 'provider'].map((type) => ({
  input: `dist/${type}.js`,
  output: [
    {
      format: "esm",
      file: `dist/${type}.js`,
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve({ modulesOnly: true, preferBuiltins: false }),
    terser(),
    gzipPlugin()
  ],
}));
