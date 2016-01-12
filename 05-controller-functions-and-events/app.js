(function (angular) {
  // IIFE = Immediately Invoked Function Expression
  "use strict";

  angular.module('app1', [])
  .controller('IncrementerController', IncrementerController);

  function IncrementerController() {
    var ic = this; // Other names: that, self, vm
    ic.count = 0;
    ic.increment = function () {
      ic.count++;
    };

    ic.setText = function (text) {
      ic.text = text;
    };
  }

})(window.angular);
