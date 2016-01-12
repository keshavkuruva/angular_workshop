(function (angular) {
  'use strict';

  angular.module('app', [])
    .controller('OuterController', OuterController)
    .directive('capitalDisplay', function() {
      return {
        restrict: 'E',
        template: '<h2>The capital of {{countryName}} is {{capital}}</h2>',
        scope: {
          capital: '@capital',
          countryName: '@countryName'
        }
      }
    })
    .directive('myCountry', function () {
      return {
        restrict: 'E',
        templateUrl: 'country-template.html',
        scope: {
          c: '=country'
        },
      }
    });

  function OuterController() {
    this.canada = {
      "countryCode": "CA",
      "countryName": "Canada",
      "population": 33679000,
      "capital": "Ottawa",
      "areaInSqKm": 9984670,
    };

    this.usa = {
      "countryCode": "US",
      "countryName": "United States",
      "population": 310232863,
      "capital": "Washington",
      "areaInSqKm": 9629091,
    };
  }

})(window.angular);
