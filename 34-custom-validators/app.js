(function (angular) {
  'use strict';

  // A custom validator looks like any other directive,
  // other than requiring ngModel.

  angular.module('formExample', [])

    .directive('cvExample', function () {
      return {
        restrict: 'E',
        templateUrl: 'cv-example.html',
        controller: CvExampleController,
        controllerAs: 'cve'
      }
    })

    .directive('mustBeEven', function () {
      return {
        // We explain and show 'require' in depth in a later step
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          ctrl.$validators.even = function (modelValue, viewValue) {
            return ctrl.$isEmpty(modelValue) ||
              parseInt(modelValue) % 2 == 0;
          };
        }
      };
    });

  function CvExampleController() {

  }

})(window.angular);
