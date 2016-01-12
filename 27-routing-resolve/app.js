(function (angular) {
  "use strict";

  angular.module('app1', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider.
        when('/country/:id', {
          // Again, a pseudo-component:
          templateUrl: 'country-detail.html',
          controller: 'CountryDetailController',
          controllerAs: 'cdc',
          resolve: {
            // This variant requires that the factory *is* a promise:
            // "country": "CountryLoader"
            // More typically a factory has a function which returns a promise;
            // DI is available in a resolve function.
            "country": function ($route, countryService) {
              // $routeParams is not updated until the route is resolved;
              // use $route.current.params instead
              return countryService.load($route.current.params.id);
            }
          }
        }).
        otherwise({
          redirectTo: '/country/usa'
        });
    })

    .controller('CountryDetailController', CountryDetailController)

    .service('countryService', CountryService)

    .factory("promiseSleep", function ($timeout) {
      return function (ms) {
        return function (value) {
          return $timeout(function () {
            return value;
          }, ms);
        };
      };
    });

  function CountryDetailController(country) {
    var vm = this;
    vm.country = country;
    // The old way, without Route-Resolve:
    // CountryService.load(countryCode).then(function(x) {
    //   vm.country = x;
    // });
  }

  function CountryService($http, promiseSleep) {
    this.load = function (countryCode) {
      return $http.get('../demo-data/' + countryCode + '.json')
        .then(promiseSleep(1800)) //to make it visibly delay
        .then(function (response) {
          return response.data;
        });
    }
  }

  function CountryLoader($route, countryService) {
    return countryService.load($route.current.params.id);
  };

})(window.angular);
