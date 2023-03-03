module.exports = {
  env: {
    production: {
      presets: [
        [
            '@vue/app',
            {
                'useBuiltIns': 'entry'
            }
        ]
      ]
    }
  }
};
