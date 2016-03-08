(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name sfautocomplete.directive:sfacinput
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="sfautocomplete">
       <file name="index.html">
        <sfacinput></sfacinput>
       </file>
     </example>
   *
   */
  angular
    .module('sfautocomplete')
    .directive('sfacinput', sfacinput);

  function sfacinput() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'sfautocomplete/sfacinput-directive.tpl.html',
      replace: false,
      controllerAs: 'sfacinput',
      controller() {
        let vm = this;
        vm.name = 'sfacinput';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
