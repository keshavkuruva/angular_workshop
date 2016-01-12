(function (angular) {
  "use strict";

  angular.module('app1', [])

    .controller('MyController', function () {
      this.address = "Main St.";

      this.ngIf = true;
      this.ngShow = true;

      this.boxes = [];
      for (var j = 0; j < 100; j++) {
        this.boxes.push({ n: j });
      }
    });

})(window.angular);
