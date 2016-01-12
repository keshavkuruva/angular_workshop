(function (angular) {
  "use strict";

  angular.module("exampleApp", ["addressBook"])

    .directive("exampleApp", function () {
      return {
        restrict: "E",
        templateUrl: "components/exampleApp/exampleApp.html",
        scope: {
        },
        controller: function () { },
        controllerAs: 'ea',
        bindToController: true
      };
    });

})(window.angular);
