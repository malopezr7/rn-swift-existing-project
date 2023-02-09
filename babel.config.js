module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        useTransformReactJSXExperimental: true,
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    'react-native-reanimated/plugin',
    '@babel/plugin-proposal-unicode-property-regex',
  ],
};
