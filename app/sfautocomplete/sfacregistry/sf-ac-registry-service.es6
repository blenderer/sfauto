(function () {
  'use strict';

  class SfAcRegistry {

    constructor() {

      this.registry = {};

      this.requiredEvents = [
        'onType'
      ];
      this.optionalEvents = [
        'onSelect',
        'onSubmitQuery',
        'onSelectedMove'
      ];



      this.requiredProperties = [
        'name'
      ];
    }

    register(autocomplete) {
      if (this._checkRequired(autocomplete)) {
        autocomplete = this._addDefaults(autocomplete);

        if (!this.registry[autocomplete.name]) {
          this.registry[autocomplete.name] = autocomplete;
        }
        else {
          throw "provided autocomplete name is already registered, please choose a new name attribute"
        }

      }
      else {
        throw "provided autocomplete is missing required methods/properties to be implemented"
      }

      return autocomplete;
    }

    get() {
      return 'SfAcRegistry';
    }

    _checkRequired(autocomplete) {
      let self = this;



      return true;
    }

    _addDefaults(autocomplete) {
      // adds default options to the autocomplete (state and items)

      if (!autocomplete.events) {
        autocomplete.events = {};
      }

      this.optionalEvents.forEach(function(eventName) {
        if (!autocomplete.events[eventName] || typeof autocomplete.events[eventName] !== 'function') {
          autocomplete.events[eventName] = function(){};
        }
      });

      autocomplete.items = [];
      autocomplete.state = {
        selectedIndex: null,
        focused: false
      };
      autocomplete.query = '';
      autocomplete.throttleLimit = autocomplete.throttleLimit || 160;


      return autocomplete;
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
