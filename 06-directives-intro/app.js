(function (angular) {
  "use strict";

  angular.module("myApp", [])
    .directive("cardBlock", function (/* could do DI */) {
      return {
        restrict: "AEC",  // Attribute, Element, Class
        templateUrl: "card.html"
      };
    });

})(window.angular);
