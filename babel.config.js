module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
            '.png',
            '.jpeg',
          ],
          alias: {
            '@shared': './src/shared',
          },
        },
      ],
      [
        "module:react-native-dotenv",
         {
          "envName": "APP_ENV",
          "moduleName": "react-native-dotenv",
          "path": ".env",
          "blocklist": null,
          "allowlist": null,
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        }]
    ],
  };
};
