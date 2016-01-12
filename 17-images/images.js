(function (angular) {
  "use strict";

  function CountryController($http) {
    var that = this;
    // Experts recommend not talking to a backend
    // directly from a controller.
    $http.get('../demo-data/countries.json').then(function (response) {
      that.countries = response.data;
    });
  }

  angular.module('app1', [])
    .controller('CountryController', CountryController);
})(window.angular);
