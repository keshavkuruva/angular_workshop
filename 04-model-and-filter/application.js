(function (angular) {
  "use strict";

  // Purposes of of the IIFE and parameters:
  // * Inform some IDEs that global access is intentional.
  // * Document use of globals.
  // * Protect from accidentaly overwrite.
  // * Rename locally ("ng")
  // * Robust access to the real Undefined.

  function CountryController() {
    // this.query = a;

    this.countries = [
      {
        "countryCode": "RU",
        "countryName": "Russia",
        "population": 140702000,
        "capital": "Moscow",
        "areaInSqKm": 17100000,
      },
      {
        "countryCode": "CA",
        "countryName": "Canada",
        "population": 33679000,
        "capital": "Ottawa",
        "areaInSqKm": 9984670,
      },
      {
        "countryCode": "US",
        "countryName": "United States",
        "population": 310232863,
        "capital": "Washington",
        "areaInSqKm": 9629091,
      },
      {
        "countryCode": "CN",
        "countryName": "China",
        "population": 1330044000,
        "capital": "Beijing",
        "areaInSqKm": 9596960,
      },
      {
        "countryCode": "BR",
        "countryName": "Brazil",
        "population": 201103330,
        "capital": "Brasília",
        "areaInSqKm": 8511965,
      },
      {
        "countryCode": "AU",
        "countryName": "Australia",
        "population": 21515754,
        "capital": "Canberra",
        "areaInSqKm": 7686850,
      },
      {
        "countryCode": "IN",
        "countryName": "India",
        "population": 1173108018,
        "capital": "New Delhi",
        "areaInSqKm": 3287590,
      }
    ];
  }

  angular.module('app', [])
    .controller('CountryController', CountryController);

})(window.angular);
