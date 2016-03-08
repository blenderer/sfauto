(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name sfautocomplete.directive:sfaclist
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="sfautocomplete">
       <file name="index.html">
        <sfaclist></sfaclist>
       </file>
     </example>
   *
   */
  angular
    .module('sfautocomplete')
    .directive('sfaclist', sfaclist);

  function sfaclist() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'sfautocomplete/sfaclist/sfaclist-directive.tpl.html',
      replace: false,
      controllerAs: 'sfaclist',
      controller() {
        let vm = this;
        vm.name = 'sfaclist';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
