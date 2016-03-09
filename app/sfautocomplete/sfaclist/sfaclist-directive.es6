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

  function sfaclist($compile) {
    return {
      restrict: 'E',
      scope: {
        for: '@for'
      },
      templateUrl: 'sfautocomplete/sfaclist/sfaclist-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'vm',
      controller: ListController,
      link(scope, element, attrs) {

        // prevent other things from losing focus when clicking on this list
        element[0].addEventListener('mousedown', handleMouseDown);

        function handleMouseDown(e) {
          e.preventDefault();
        }
      },
    };
  }

  ListController.$inject = ['$rootScope', '$scope'];
  sfaclist.$inject = ['$compile'];



  function ListController($rootScope, $scope) {
    let vm = this;
    vm.ac;
    vm.select = select;

    // listen for the register event to bind it to the list's self
    $rootScope.$on('sfac.register', function (e, register) {
      if ($scope.for === register.name) {
        vm.ac = register.ac;
        $scope.items = vm.ac.items;
      }
    });

    // a click handler that selects the item
    function select(item) {
      vm.ac.events.onSelect(item);
    }
  }
}());
