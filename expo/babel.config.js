module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            assets: './assets',
            Theme: './Theme',
            Components: './Components',
            hooks: './hooks',
          },
        },
      ],
    ],
  }
}
