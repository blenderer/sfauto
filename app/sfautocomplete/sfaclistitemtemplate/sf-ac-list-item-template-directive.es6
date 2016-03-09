(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name sfautocomplete.directive:sfAcListItemTemplate
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="sfautocomplete">
       <file name="index.html">
        <sf-ac-list-item-template></sf-ac-list-item-template>
       </file>
     </example>
   *
   */
  angular
    .module('sfautocomplete')
    .directive('sfAcListItemTemplate', sfAcListItemTemplate);

  function sfAcListItemTemplate() {
    return {
      restrict: 'E',
      replace: false,
      controllerAs: 'vm',
      controller: ItemController,
      transclude: true,
      link(scope, element, attrs, controller, $transclude) {
        var newScope;

        // this is a bit hacky, basically it checks if the immediate parent has an item on scope 
        // if it does, it uses that
        // however if we're using a directive to contain the template, it'll be two parents up
        // this is necessary to transclude scope through an ng-repeat template
        if (scope.$parent.$new().item) {
          newScope = scope.$parent.$new();
        }
        else if (scope.$parent.$parent.$new().item){
          newScope = scope.$parent.$parent.$new();
        }

        $transclude(newScope, function (clone) {
          element.append(clone);
        });
      }
    };

    function ItemController() {
      let vm = this;
    }
  }
}());
