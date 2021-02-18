export default {
  input: 'esm/index.js',
  output: {
    esModule: false,
    exports: 'named',
    file: 'index.js',
    format: 'iife',
    name: 'html'
  }
};
