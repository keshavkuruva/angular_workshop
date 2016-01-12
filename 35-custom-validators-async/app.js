(function (angular) {
  'use strict';

  var url = 'http://api.zippopotam.us/us/';

  angular.module('formExample', [])

    .directive('cvaExample', function () {
      return {
        restrict: 'E',
        templateUrl: 'cva-example.html',
        controller: CvaExampleController,
        controllerAs: 'cva'
      }
    })

    .directive('westernZip', function ($q, $timeout, $http) {
      return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.westernZip = function (modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue) || modelValue.length != 5) {
              return $q.reject(); // Empty == not valid
            } else {
              return $timeout(function () { }, 3000)
                .then(function () { return $http.get(url + modelValue); })
                .then(function (response) {
                  var longitude = response.data.places[0].longitude;
                  if (longitude > -90) {
                    return $q.reject();
                  }
                  return $q.resolve();
                  // more idiomatic to return nothing here
                });
            }
          };
        }
      };
    });

  function CvaExampleController() {
  }

})(window.angular);
