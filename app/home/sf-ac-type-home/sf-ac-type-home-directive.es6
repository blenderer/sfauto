(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name home.directive:sfAcTypeHome
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="home">
       <file name="index.html">
        <sf-ac-type-home></sf-ac-type-home>
       </file>
     </example>
   *
   */
  angular
    .module('home')
    .directive('sfAcTypeHome', sfAcTypeHome);

  function sfAcTypeHome() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'home/sf-ac-type-home-directive.tpl.html',
      replace: false,
      controllerAs: 'sfAcTypeHome',
      controller() {
        let vm = this;
        vm.name = 'sfAcTypeHome';
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
