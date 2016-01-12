(function (angular) {
  "use strict";

  angular.module("addressBook", ["addressEntry"])
    .directive("addressBook", function () {
      return {
        restrict: "E",
        templateUrl: "components/addressBook/addressBook.html",
        controller: AddressBookController,
        controllerAs: "bc",
        scope: {
          purpose: "@purpose"
        },
        bindToController: true
      };
    });

    function AddressBookController($http) {
      var self = this;
      $http.get("data.json").then(function (response) {
        self.addresses = response.data;
      });
      self.addNew = function add() {
        self.addresses.push({
          heading: "New"
        });
      };
      self.addExisting = function add(a) {
        self.addresses.push(a);
      };

      // This does not work, because binding happens after the controller.
      self.purpose = self.purpose + " and more";
    };

})(window.angular);
