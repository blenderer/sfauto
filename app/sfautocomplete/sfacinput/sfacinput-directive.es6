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
        for: '@for'
      },
      templateUrl: 'sfautocomplete/sfacinput/sfacinput-directive.tpl.html',
      replace: false,
      transclude: true,
      controllerAs: 'vm',
      controller: InputController,
      link(scope, element, attrs, controller) {
        var parent = element[0];
        var input = parent.querySelector('input');

        // Event bindings for the input
        input.addEventListener('keypress', handleKeypress);
        input.addEventListener('keyup', handleKeyup);
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);

        function handleKeypress(e) {
          let state = controller.ac.state;
          if (e.which === 13) { // enter

            // nothing is selected, a query is typed and they've pressed enter
            if (state.selectedIndex === null) {

              if (controller.ac.query.trim() !== "") {
                controller.ac.events.onSubmitQuery(controller.ac.query);
              }
            }
            else { //they've arrow downed and pressed enter on an item
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

  InputController.$inject = ['$rootScope', '$scope', 'SfAcRegistry', '$q', '$timeout'];

  function InputController($rootScope, $scope, SfAcRegistry, $q, $timeout) {
    let vm = this;
    vm.ac;
    vm.currentCall;
    vm.select = select;
    vm.typing = typing;

    $rootScope.$on('sfac.register', function (e, register) {

      // check if directive 'for' matches the event's name
      if ($scope.for === register.name) {
        vm.ac = SfAcRegistry.register(register.ac);
      }
    });

    // function is called when someone clicks or arrow down/ups an item
    function select(item) {
      vm.ac.events.onSelect(item);
    }

    // always fired when someone is typing
    function typing(searchText) {
      vm.ac.state.selectedIndex = null;
      vm.ac.items = [];

      // Don't make a call if input has nothing
      if (searchText.trim() === '') {
        return false;
      }

      // If there is a current timeout being executed, cancel it first
      if (vm.currentCall) {
        $timeout.cancel(vm.currentCall);
      }

      // start a timeout according to the throttleLimit
      vm.currentCall = $timeout(function() {

        // q.when allows you to support regular functions and promise'd functions
        $q.when(vm.ac.events.onType(searchText)).then(function(results) {
          vm.ac.items = results;
        });

        vm.currentCall = undefined;
      }, vm.ac.throttleLimit); // throttleLimit can be set by the directive user

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
