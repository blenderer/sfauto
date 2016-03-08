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
      restrict: 'E',
      scope: {
        ac: '=ac'
      },
      replace: false,
      controllerAs: 'sfAcTypeHome',
      controller: HomeTypeController,
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */

      }
    };
  }

  HomeTypeController.$inject = ['$scope'];

  function HomeTypeController($scope) {
    let vm = this;
    vm.name = 'hometype';
    vm.ac = {
      type: 'home',
      onSelect: function(item) {
        alert('selected item HOME');
      },
      onSubmitQuery: function(query) {
        alert('submitted query HOME');
      }
    };

    $scope.$emit('ac', vm.ac);
  }
}());
