(function () {
  'use strict';

  class SfAcRegistry {

    constructor() {

      // this holds all of autocomplete instances
      this.registry = {};

      // these events are required by the implementor or an error will be thrown
      this.requiredEvents = [
        'onType'
      ];
      this.optionalEvents = [
        'onSelect',
        'onSubmitQuery',
        'onSelectedMove'
      ];


      // required properties or an error will be thrown
      this.requiredProperties = [
        'name'
      ];
    }

    register(autocomplete) {

      // first check if autocomplete has required fields
      if (this._checkRequired(autocomplete)) {

        // add default properties to the autocomplete object
        autocomplete = this._addDefaults(autocomplete);

        // register the autocomplete by name if it's not already registered
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

    _checkRequired(autocomplete) {
      let self = this;



      return true;
    }

    _addDefaults(autocomplete) {
      // adds default options to the autocomplete (state and items)

      if (!autocomplete.events) {
        autocomplete.events = {};
      }

      // add each optional event only if it's missing
      this.optionalEvents.forEach(function(eventName) {
        if (!autocomplete.events[eventName] || typeof autocomplete.events[eventName] !== 'function') {
          autocomplete.events[eventName] = function(){};
        }
      });

      // add state and default options
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
