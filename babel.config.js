module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.png',
        ],
        alias: {
          '@util': './src/util',
          '@styles': './src/styles',
          '@components': './src/components',
          '@dashboard': './src/features/dashboard',
          '@features': './src/features',
          '@images': './src/assets/images',
          '@icons': './assets/icons',
          '@navigators': './src/navigators',
          '@api': './src/util/api',
          '@app': './src/app',
        },
      },
    ],
  ],
};
