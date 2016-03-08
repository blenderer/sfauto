(function () {
  'use strict';

  class SfautocompleteCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'SfautocompleteCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name sfautocomplete.controller:SfautocompleteCtrl
   *
   * @description
   *
   */
  angular
    .module('sfautocomplete')
    .controller('SfautocompleteCtrl', SfautocompleteCtrl);
}());
