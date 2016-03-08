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

  InputController.$inject = ['$scope'];

  function sfacinput() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'sfautocomplete/sfacinput/sfacinput-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'vm',
      controller: InputController,
      link(scope, element, attrs) {

        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }

  function InputController($scope) {
    let vm = this;
    vm.name = 'sfacinput';
    vm.ac;

    $scope.$on('ac', function (e, ac) {
      vm.ac = ac;
    });
  }
}());
