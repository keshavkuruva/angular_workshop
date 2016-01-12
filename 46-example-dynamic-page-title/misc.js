(function (angular) {
  "use strict";

  // Add more to the same module; this has nothing to do with routing,
  // it merely shows another variation of how the module system can be used.

  angular.module("BootcampApp")
    .controller("BlueController", function () {
      this.message = "Hello Blue World!";
    })
    .controller("RedController", function () {
      this.message = "Hello Red World!";
    });


})(window.angular);
