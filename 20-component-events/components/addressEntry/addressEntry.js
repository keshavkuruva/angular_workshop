(function (angular) {
  "use strict";

  function AddressEntryController() {
    var aec = this;
    this.dup = function() {
      // Surprising API in use here:
      aec.duplicate(
        { address: angular.copy(aec.address)});
    }
  }

  angular.module("addressEntry", [])
    .directive("addressEntry", function () {

      return {
        restrict: "E",
        templateUrl: "components/addressEntry/addressEntry.html",
        scope: {
          label: "@",
          address: "=addr",
          duplicate: "&"
        },
        controller: AddressEntryController,
        controllerAs: "ae",
        bindToController: true
      };
    });

})(window.angular);
