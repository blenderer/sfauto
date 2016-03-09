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

  InputController.$inject = ['$rootScope'];

  function sfacinput() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'sfautocomplete/sfacinput/sfacinput-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'vm',
      controller: InputController,
      link(scope, element, attrs, controller) {
        var parent = element[0];
        var input = parent.querySelector('input');

        input.addEventListener('keypress', function(e) {
          if (e.which === 13) { //enter
            if (controller.ac.selectedIndex === null) {
              controller.ac.onSubmitQuery(controller.ac.query);
            }
            else {
              let item = controller.ac.items[controller.ac.selectedIndex];
              controller.ac.onSelect(item);
            }
          }
        });

        input.addEventListener('keyup', function(e) {
          if (e.which === 38) { // up arrow
            controller.ac.selectedIndex = decrementSelectedIndex(controller.ac.selectedIndex, controller.ac.items);
            scope.$apply();
          } else if (e.which === 40) { // down arrow
            controller.ac.selectedIndex = incrementSelectedIndex(controller.ac.selectedIndex, controller.ac.items);
            scope.$apply();
          }
        });

        input.addEventListener('focus', function(e) {
          controller.ac.focused = true;
          scope.$apply();
        });

        input.addEventListener('blur', function(e) {
          controller.ac.focused = false;
          scope.$apply();
        });

        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }

  function InputController($rootScope) {
    let vm = this;
    vm.ac;

    $rootScope.$on('ac', function (e, ac) {
      vm.ac = ac;
    });

    vm.select = select;
    vm.typing = typing;

    function select(item) {
      vm.ac.onSelect(item);
    }

    function typing(searchText) {
      vm.ac.items = vm.ac.onType(searchText);
    }
  }

  function incrementSelectedIndex(current, items) {
    if (current === null) {
      current = 0;
    }
    else if (current < items.length - 1) {
      current++;
    }

    return current;
  }

  function decrementSelectedIndex(current, items) {
    if (current > 0) {
      current--;
    }
    else {
      current = null;
    }

    return current;
  }
}());
