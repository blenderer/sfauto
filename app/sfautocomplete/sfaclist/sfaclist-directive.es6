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

  ListController.$inject = ['$rootScope'];

  function sfaclist() {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'sfautocomplete/sfaclist/sfaclist-directive.tpl.html',
      replace: false,
      controllerAs: 'vm',
      controller: ListController,
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }

  function ListController($rootScope) {
    let vm = this;
    vm.ac;

    $rootScope.$on('ac', function (e, ac) {
      vm.ac = ac;
      init();
    });

    function init() {
      vm.select = select;

      function select(item) {
        vm.ac.onSelect(item);
      }
    }
  }
}());
