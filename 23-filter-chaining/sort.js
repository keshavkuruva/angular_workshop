(function (angular) {
  "use strict";

 function CountryController() {
    this.countries = [
      {
        "countryCode": "RU",
        "countryName": "Russia",
        "population": 140702000,
        "capital": "Moscow",
        "areaInSqKm": 17100000,
        "continent": "Asia"
      },
      {
        "countryCode": "CA",
        "countryName": "Canada",
        "population": 33679000,
        "capital": "Ottawa",
        "areaInSqKm": 9984670,
        "continent": "North America"
      },
      {
        "countryCode": "US",
        "countryName": "United States",
        "population": 310232863,
        "capital": "Washington",
        "areaInSqKm": 9629091,
        "continent": "North America"
      },
      {
        "countryCode": "CN",
        "countryName": "China",
        "population": 1330044000,
        "capital": "Beijing",
        "areaInSqKm": 9596960,
        "continent": "Asia"
      },
      {
        "countryCode": "BR",
        "countryName": "Brazil",
        "population": 201103330,
        "capital": "Brasília",
        "areaInSqKm": 8511965,
        "continent": "South America"
      },
      {
        "countryCode": "AU",
        "countryName": "Australia",
        "population": 21515754,
        "capital": "Canberra",
        "areaInSqKm": 7686850,
        "continent": "Oceania"
      },
      {
        "countryCode": "IN",
        "countryName": "India",
        "population": 1173108018,
        "capital": "New Delhi",
        "areaInSqKm": 3287590,
        "continent": "Asia"
      }
    ];

    this.orderProp = 'areaInSqKm';

    // It is possible to sort by more than one field:
    // this.sorts = ['population', 'areaInSqKm'];
  }

  angular.module('app1', [])
    .controller('CountryController', CountryController);

})(window.angular);
