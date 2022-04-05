module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@app/api": "./src/api",
            "@app/components": "./src/components",
            "@app/constants": "./src/constants",
            "@app/hooks": "./src/hooks",
            "@app/navigation": "./src/navigation",
            "@app/redux": "./src/redux",
            "@app/screens": "./src/screens",
            "@app/styles": "./src/styles",
            "@app/types": "./src/types",
            "@app/utils": "./src/utils",
          },
        },
        "inline-dotenv",
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
