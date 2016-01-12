(function (angular) {
  "use strict";

  angular.module('promisesModule', [])
    .controller('PromiseController', PromiseController);

  function PromiseController($q) {

    var d1 = $q.defer();
    var p1 = d1.promise;

    var d2 = $q.defer();
    var p2 = d2.promise;

    this.go1 = function go1() {
      d1.resolve(1);
    };

    this.go2 = function go2() {
      d2.resolve(2);
    };

    this.stop1 = function() {
      d1.reject("oops");
    };

    $q.all([p1, p2]).then(function(results) {
      console.log("success", results)
    }, function(e) {
      console.error("fail", e);
    });

  }

})(window.angular);
