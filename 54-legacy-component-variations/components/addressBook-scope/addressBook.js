(function (angular) {
  "use strict";

  angular.module("addressBook", ["addressEntry"])
    .directive("addressBook", function () {
      return {  // DDO
        restrict: "E",
        templateUrl: "components/addressBook-scope/addressBook.html",
        controller: AddressBookController,
        scope: { // "Isolate Scope"
          purpose: "@purpose"
        }
      };
    });

    // Minification safe:
    // AddressBookController.$inject = ['$scope', '$http'];
    function AddressBookController($scope, $http) {
      $http.get("data.json").then(function (response) {
        $scope.addresses = response.data;
      });
      $scope.add = function add() {
        $scope.addresses.push({
          heading: "New"
        });
      };
    };

})(window.angular);
