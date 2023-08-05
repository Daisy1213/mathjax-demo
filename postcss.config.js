module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100,
      unitPrecision: 5,
      propWhiteList: [],
      selectorBlackList: [
        'video-js',
      ],
      replace: true,
      mediaQuery: false,
      minPixelValue: 2
    }
  }
}
