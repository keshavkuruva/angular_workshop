(function (angular) {
  "use strict";

  angular.module("addressBook", ["addressEntry"])
    .directive("addressBook", function ($http) {
      return {  // DDO
        restrict: "E",
        templateUrl: "components/addressBook-scope/addressBook.html",
        link: linkFn,
        scope: { // "Isolate Scope"
          purpose: "@purpose"
        }
      };

      //
      function linkFn(scope, element, attrs) {
        $http.get("data.json").then(function (response) {
          scope.addresses = response.data;
        });
        scope.add = function add() {
          scope.addresses.push({
            heading: "New"
          });
        };
      };
    });

})(window.angular);
