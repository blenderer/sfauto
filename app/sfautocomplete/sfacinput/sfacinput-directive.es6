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
      restrict: 'E',
      scope: {
        name: '@name'
      },
      templateUrl: 'sfautocomplete/sfacinput/sfacinput-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'vm',
      controller: InputController,
      link(scope, element, attrs, controller) {
        var parent = element[0];
        var input = parent.querySelector('input');

        input.addEventListener('keypress', handleKeypress);
        input.addEventListener('keyup', handleKeyup);
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);

        function handleKeypress(e) {
          let state = controller.ac.state;
          if (e.which === 13) { //enter
            if (state.selectedIndex === null) {

              if (controller.ac.query.trim() !== "") {
                controller.ac.events.onSubmitQuery(controller.ac.query);
              }
            }
            else {
              let item = controller.ac.items[state.selectedIndex];
              controller.ac.events.onSelect(item);
            }
          }
        }

        function handleKeyup(e) {
          let state = controller.ac.state;

          if (e.which === 38) { // up arrow
            state.selectedIndex = decrementSelectedIndex(state.selectedIndex, controller.ac.items);

          } else if (e.which === 40) { // down arrow
            state.selectedIndex = incrementSelectedIndex(state.selectedIndex, controller.ac.items);

          } else if (e.which === 27) { // escape
            state.selectedIndex = null;
          }
          scope.$apply();
        }

        function handleFocus(e) {
          controller.ac.state.focused = true;
          scope.$apply();
        }

        function handleBlur(e) {
          controller.ac.state.focused = false;
          scope.$apply();
        }
      }
    };
  }

  InputController.$inject = ['$rootScope', '$scope', 'SfAcRegistry'];

  function InputController($rootScope, $scope, SfAcRegistry) {
    let vm = this;
    vm.ac;

    $rootScope.$on('sfac.register', function (e, register) {
      if ($scope.name === register.name) {
        SfAcRegistry.register(register.ac);
        vm.ac = register.ac;
      }
    });

    vm.select = select;
    vm.typing = typing;

    function select(item) {
      vm.ac.events.onSelect(item);
    }

    function typing(searchText) {
      vm.ac.state.selectedIndex = null;
      vm.ac.items = vm.ac.events.onType(searchText);
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
