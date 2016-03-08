(function () {
  'use strict';

  angular
    .module('sfauto')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
