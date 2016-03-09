'use strict';
angular
  .module('sfautocomplete')
  .directive('sfAcPersonItem', sfAcPersonItem);

function sfAcPersonItem() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'sfautocomplete/sfaclistitemtemplate/person/sf-ac-person-item-directive.tpl.html',
    replace: true,
    controllerAs: 'sfAcPersonItem',
    controller() {
      let vm = this;
      vm.name = 'sfAcPersonItem';
    },
    link(scope, element, attrs) {
      /* jshint unused:false */
      /* eslint "no-unused-vars": [2, {"args": "none"}] */
    }
  };
}
