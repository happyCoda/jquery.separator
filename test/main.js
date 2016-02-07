require.config({
  baseUrl: 'lib/',

  paths: {
    jasmine: 'jasmine',
    jasmineHtml: 'jasmine-html',
    boot: 'boot',
    jquery: '../../js/jquery-2.0.3.min',
    separator: '../../js/jquery.separator',
    separatorSpec: '../spec/jquery.separator'
  },

  shim: {
    jasmineHtml: {
      deps: ['jasmine'],
      exports: 'jasmineRequire'
    },

    boot: {
      deps: ['jasmine', 'jasmineHtml'],
      exports: 'jasmineRequire'
    },

    separator: {
      deps: ['jquery']
    },

    separatorSpec: {
      deps: ['boot', 'separator']
    }
  }
});

require([
  'boot',
  'jquery',
  'separator',
  'separatorSpec'
], function ($) {

  window.onload();
});
