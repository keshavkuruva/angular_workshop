(function(angular) {
  'use strict';

  angular.module('countries', [])
    .service('countryService', CountryService)
    .controller('CountryController', CountryController);

  function CountryService() {
    this.getList = function() {
      return ["Russia","Canada","United States","China"];
    };
  }

  function CountryController(countryService) {
    this.list = countryService.getList();
  }

})(window.angular);
