
import commonjs from "@rollup/plugin-commonjs";
import buble from "@rollup/plugin-buble";

export default {
  input: 'src/index.js',
  output: {
    name: 'simpleUUId',
    exports: 'named',
  },
  plugins:[
    commonjs(),
    buble(),
  ],
};
