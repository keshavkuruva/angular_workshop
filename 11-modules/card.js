(function (angular) {
  "use strict";

  angular.module("card", [])
    .directive("cardBlock", function () {
      return {
        restrict: "AEC",
        templateUrl: "card.html",
      };
    })

    .controller("PersonController", function () {
      this.name = "The Wrong Name";
      this.deck = [1, 2];
    });

})(window.angular);
