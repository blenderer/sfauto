(function () {
  'use strict';

  class Sfacservice {
    constructor() {
    }

    get() {
      return 'Sfacservice';
    }
  }

  /**
   * @ngdoc service
   * @name sfautocomplete.service:Sfacservice
   *
   * @description
   *
   */
  angular
    .module('sfautocomplete')
    .service('Sfacservice', Sfacservice);
}());
