const { withNxMetro } = require('@nrwl/react-native');
const exclusionList = require('metro-config/src/defaults/exclusionList');

module.exports = (async () => {
  return withNxMetro(
    {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
          },
        }),
        // babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        // assetExts: assetExts.filter((ext) => ext !== 'svg'),
        // sourceExts: [...sourceExts, 'svg'],
        blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
      },
    },
    {
      // Change this to true to see debugging info.
      // Useful if you have issues resolving modules
      debug: false,
      // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
      extensions: [],
      // the project root to start the metro server
      projectRoot: __dirname,
      // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
      watchFolders: [],
    }
  );
})();
