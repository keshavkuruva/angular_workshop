(function (angular) {
  "use strict";

  function CountryController(countryService) {
    var cc = this;
    countryService.getList().then(function (list) {
      cc.countries = list;
    });

    countryService.getListLength().then(function (len) {
      cc.listLength = len;
    });
  }

  function CountryService($http) {
    var url = '../demo-data/countries.json';

    function log(param) {
      console.log(param);
      return param;
    }

    this.getList = function () {
      return $http.get(url).then(function (response) {
        return response.data;
      });
    };

    this.getListLength = function () {
      return $http.get(url)
        .then(log)
        .then(function (response) { return response.data; })
        .then(log)
        .then(function (list) { return list.length; })
        .then(log);
    }

    // Who wants to dive into ES6?
    this.getListLength2 = () =>
      $http.get(url)
        .then(response => response.data)
        .then(list => list.length);
  }

  angular.module('app', [])
    .controller('CountryController', CountryController)
    .service('countryService', CountryService);

})(window.angular);
