(function (angular) {
  "use strict";

  angular.module('app1', [])
    .controller('AppController', function () {
      var ac = this,
        i = 0;

      // How does Angular know about this relationship?
      ac.address = "Main St.";
      ac.foo = function () {
        ac.address = "nnnn";
      }
      ac.count = function () {
        console.log("count called");

        // What happens if we change things as part of this?
        // console.log("count called", ++i);

        // How soon will this converge?
        // if(i < 5) i++;

        // Never return the same thing twice
        // return i++;

        // Return the same thing each time - still called
        return 42;
      }
    });
})(window.angular);
