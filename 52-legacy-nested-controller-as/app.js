(function (angular) {
  "use strict";

  function FirstController() {
    this.name = "Barry";
  }

  function SecondController() {
    var sc = this;
    sc.name = 'Harold';
  }

  angular.module('sandbox', [])
    .controller('FirstController', FirstController);

})(window.angular);
