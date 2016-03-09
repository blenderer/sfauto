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

  ListController.$inject = ['$rootScope', '$scope'];

  function sfaclist() {
    return {
      restrict: 'E',
      scope: {
        name: '@name'
      },
      templateUrl: 'sfautocomplete/sfaclist/sfaclist-directive.tpl.html',
      replace: false,
      controllerAs: 'vm',
      controller: ListController,
      link(scope, element, attrs) {

        // prevent other things from losing focus when clicking on this list
        element[0].addEventListener('mousedown', function(e) {
          e.preventDefault();
        });
      }
    };
  }

  function ListController($rootScope, $scope) {
    let vm = this;
    vm.ac;
    vm.select = select;

    $rootScope.$on('sfac.register', function (e, register) {
      if ($scope.name === register.name) {
        vm.ac = register.ac;
      }
    });

    function select(item) {
      vm.ac.onSelect(item);
    }
  }
}());
