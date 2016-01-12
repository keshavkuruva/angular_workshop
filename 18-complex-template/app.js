(function (angular) {
  "use strict";

  angular.module('app1', [])
    .directive('countryDetail', function() {
      return {
        restrict: 'E',
        templateUrl: 'country-detail.html',
        controller: CountryDetailController,
        controllerAs: 'cd'
      }
    })
    .service('countryDetailService', CountryDetailService);

  function CountryDetailController(countryDetailService) {
    var cd = this;
    cd.showEthnicGroups = true;
    cd.showGovt = true;
    cd.otherInfo = '';

    cd.toggleGovt = function() {
      cd.showGovt = !cd.showGovt;
    }

    countryDetailService.get('usa').then(function (data) {
      cd.country = data;
    });
  }

  function CountryDetailService($http) {
    this.get = function(country) {
      return $http.get('../demo-data/' + country + '.json')
        .then(function (response) { return response.data;
      });
    };
  }

})(window.angular);
