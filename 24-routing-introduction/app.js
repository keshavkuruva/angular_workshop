(function (angular) {
  "use strict";

  angular.module('simpleApplication', ['ngRoute'])
    .config(
      function ($routeProvider) {
        $routeProvider.
          when('/welcome', {
            //routes define one "implicit component" per page
            templateUrl: 'welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'wc'
          }).
          when('/countries', {
            templateUrl: 'country-list.html',
            controller: 'CountryListController',
            controllerAs: 'cl'
          }).
          when('/country/:countryCode', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailController',
            controllerAs: 'cd'
          }).
          otherwise({
            redirectTo: '/welcome'
          });
      })
    .controller('WelcomeController', WelcomeController)
    .controller('CountryListController', CountryListController)
    .controller('CountryDetailController', CountryDetailController);

  function WelcomeController() {
    this.who = 'World';
  }

  function CountryListController($http) {
    var clc = this;
    $http.get('../demo-data/countries.json').then(function (response) {
      clc.countries = response.data;
    });

    clc.orderProp = 'countryName';
  }

  function CountryDetailController($routeParams) {
    this.countryCode = $routeParams.countryCode;
  }

  // Angular does not care how modules are grouped in files.
  // a ___Controllers module makes little sense in real applications.

})(window.angular);
