const configPath = require('../config/configPath');


const configOption = {
  pipeBreaking: {
    err: configPath.errorHandler
  },

  cssMinOption: {
    specialComments: 1,
    format: 'beautify',
    level: 1
  },

  sassAPI: {
    errLogToConsole: true,
    outputStyle: 'expanded',
    sourceComments: true
  },

  autoPrefixOptions: {
    browsers: [
      "last 5 versions"
    ],
    cascade: true
  },

  es6: {
    "presets": ["env"]
  },

  svgMin: {
    js2svg: {
      pretty: true
    }
  },

  renameOption: {
    suffix: '.min'
  },

  changed: {
    firstPass: true
  },

  sourceMapStyle: {
    includeContent: true,
    sourceRoot: '../src'
  }
};


module.exports = configOption;
