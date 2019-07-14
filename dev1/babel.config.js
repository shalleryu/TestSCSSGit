module.exports = {
  // presets: ['module:metro-react-native-babel-preset'],
  presets: [['babel-preset-expo', {
    web: { transformImportExport: true }
  }]],
  plugins: [
    ["module-resolver", {
      "alias": {
        "^react-native$": "react-native-web"
      }
    }]
  ]
};
