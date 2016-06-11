module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'myGLobalVariable',
    jsNext: true,
    umd: true
  }
}
