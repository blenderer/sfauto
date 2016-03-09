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
    .module('sfautocomplete')
    .directive('sfAcTypeHome', sfAcTypeHome);

  function sfAcTypeHome() {
    return {
      restrict: 'E',
      scope: {
        name: '@name'
      },
      replace: false,
      controllerAs: 'sfAcTypeHome',
      controller: HomeTypeController,
      link(scope, element, attrs, controller) {

      }
    };
  }

  HomeTypeController.$inject = ['$rootScope', '$timeout', '$scope'];

  function HomeTypeController($rootScope, $timeout, $scope) {
    let vm = this;

    vm.ac = {
      name: $scope.name,
      events: {
        onSelect: function(item) {
          alert('selected item: ' + item);
        },
        onSubmitQuery: function(query) {
          alert('submitted query: ' + query);
        },
        onSelectedMove: function(item) {

        },
        onType: function(searchText) {
          if (searchText.trim() === "") {
            return [];
          }

          let filteredList = vm.states.filter(function(item) {
            return item.toLowerCase().match(searchText.toLowerCase())
          });

          let cutList = filteredList.slice(0, 6);

          return cutList;
        }
      }
    };

    vm.states = [
      'ALABAMA',
      'ALASKA',
      'AMERICAN SAMOA',
      'ARIZONA',
      'ARKANSAS',
      'CALIFORNIA',
      'COLORADO',
      'CONNECTICUT',
      'DELAWARE',
      'DISTRICT OF COLUMBIA',
      'FEDERATED STATES OF MICRONESIA',
      'FLORIDA',
      'GEORGIA',
      'GUAM',
      'HAWAII',
      'IDAHO',
      'ILLINOIS',
      'INDIANA',
      'IOWA',
      'KANSAS',
      'KENTUCKY',
      'LOUISIANA',
      'MAINE',
      'MARSHALL ISLANDS',
      'MARYLAND',
      'MASSACHUSETTS',
      'MICHIGAN',
      'MINNESOTA',
      'MISSISSIPPI',
      'MISSOURI',
      'MONTANA',
      'NEBRASKA',
      'NEVADA',
      'NEW HAMPSHIRE',
      'NEW JERSEY',
      'NEW MEXICO',
      'NEW YORK',
      'NORTH CAROLINA',
      'NORTH DAKOTA',
      'NORTHERN MARIANA ISLANDS',
      'OHIO',
      'OKLAHOMA',
      'OREGON',
      'PALAU',
      'PENNSYLVANIA',
      'PUERTO RICO',
      'RHODE ISLAND',
      'SOUTH CAROLINA',
      'SOUTH DAKOTA',
      'TENNESSEE',
      'TEXAS',
      'UTAH',
      'VERMONT',
      'VIRGIN ISLANDS',
      'VIRGINIA',
      'WASHINGTON',
      'WEST VIRGINIA',
      'WISCONSIN',
      'WYOMING'
    ];


    $timeout(function() {
      $rootScope.$emit('sfac.register', {
        name: vm.ac.name,
        ac: vm.ac
      });
    });
  }
}());
