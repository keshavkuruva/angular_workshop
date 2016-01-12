angular.module('app', [])
  .controller('CountryController', CountryController);

function CountryController() {
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
    }
  ];
}
