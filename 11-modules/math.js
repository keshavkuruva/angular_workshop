(function (angular) {
  "use strict";

  angular.module("math", [])
    .controller("MathController", function () {
      this.add = function (a, b) {
        return parseFloat(a) + parseFloat(b);
      };
    });

})(window.angular);
