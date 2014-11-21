require.config({
  baseUrl: '/javascript',
  paths: {
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
      '../vendor/jquery/jquery.min'
    ],
    'jquery.bootstrap': '../vendor/bootstrap/dist/js/bootstrap.min',
    'underscore': '../vendor/underscore/underscore-min',
    'backbone': '../vendor/backbone/backbone-min'
  },
  shim: {
  	'underscore': {
  		exports: '_'
  	},
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require(['./app'], function (App) {
  App.init();
});