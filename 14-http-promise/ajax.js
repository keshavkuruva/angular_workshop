(function (angular) {
  "use strict";

  function NaiveCountryController($http) {
    var ncc = this;
    // Talking to the backend from UI code - bad!
    $http.get('../demo-data/countries.json').then(function (response) {
      ncc.countries = response.data;
    });
  }

  function BetterCountryController(countryService) {
    var bcc = this;
    countryService.getList().then(function (response) {
      bcc.countries = response.data;
    });
  }

  // Most Angular experts recommend calling $http from service layer;
  // Service functions which return asyncronously, return a promise.
  function CountryService($http) {
    this.getList = function() {
      return $http.get('../demo-data/countries.json');
    }
  }

  angular.module('app', [])
    .controller('NaiveCountryController', NaiveCountryController)
    .controller('BetterCountryController', BetterCountryController)
    .service('countryService', CountryService); // Note the case for each

})(window.angular);
