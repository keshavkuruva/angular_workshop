(function (angular) {
  "use strict";

  angular.module("addressEntry", [])
    .directive("addressEntry", function () {

      return {
        restrict: "E",
        templateUrl: "components/addressEntry/addressEntry.html",
        scope: {
          label: "@",
          address: "=addr"
        },
        controller: function () { },
        controllerAs: "ae",
        bindToController: true
      };
    });

})(window.angular);
