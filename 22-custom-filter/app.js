(function (angular) {
  "use strict";

  angular.module('app1', [
    'ngRoute',
    'someFilters'
  ])
    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider.
          when('/country', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailController',
            controllerAs: 'cd'
          }).
          otherwise({
            redirectTo: '/country'
          });
      }])

    .controller('CountryDetailController', CountryDetailController);

  function CountryDetailController($http) {
    var vm = this;
    $http.get('../demo-data/usa.json').then(function (response) {
      vm.country = response.data;
    });
  }

})(window.angular);
