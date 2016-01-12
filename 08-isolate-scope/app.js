(function (angular) {
  'use strict';

  angular.module('app', [])
    .controller('OuterController', OuterController)
    .directive('countryThing', function () {
      return {
        restrict: 'E',
        templateUrl: 'capital-template.html',
        scope: {} // Try commenting this out
      };
    });

  function OuterController() {
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
