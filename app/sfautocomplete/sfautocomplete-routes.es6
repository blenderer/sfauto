(function () {
  'use strict';

  angular
    .module('sfautocomplete')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('sfautocomplete', {
        url: '/sfautocomplete',
        templateUrl: 'sfautocomplete/sfautocomplete.tpl.html',
        controller: 'SfautocompleteCtrl',
        controllerAs: 'sfautocomplete'
      });
  }
}());
