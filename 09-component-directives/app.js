(function (angular) {
  'use strict';

  angular.module('app', [])
    .directive('countryApp', function () {
      return {
        restrict: 'E',
        templateUrl: 'capital-template.html',
        scope: {},
        controller: CountryController,
        controllerAs: 'cc',
      }
    })

  function CountryController() {
    this.countries = [
      {
        "countryCode": "US",
        "countryName": "United States",
        "population": 310232863,
        "capital": "Washington",
        "areaInSqKm": 9629091,
      }, {
        "countryCode": "CA",
        "countryName": "Canada",
        "population": 33679000,
        "capital": "Ottawa",
        "areaInSqKm": 9984670,
      }
    ];
  }
})(window.angular);
