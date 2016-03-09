(function () {
  'use strict';

  class SfAcRegistry {
    let self = this;

    constructor() {
      self.requiredMethods = [
        'onType'
      ];

      self.requiredProperties = [
        'name'
      ];
    }

    register(autocomplete) {

    }

    get() {
      return 'SfAcRegistry';
    }

    _checkRequired(autocomplete) {
      autocomplete.forEach(function() {
        // if (autocomplete.)
      });
    }
  }

  /**
   * @ngdoc service
   * @name sfautocomplete.service:SfAcRegistry
   *
   * @description
   *
   */
  angular
    .module('sfautocomplete')
    .service('SfAcRegistry', SfAcRegistry);
}());
