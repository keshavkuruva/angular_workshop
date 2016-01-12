(function (angular) {
  "use strict";

  angular.module("demoApp", [])
    .controller("YellowController", YellowController)
    .service("statefulService", StatefulService)
    .service("dataFeed", DataFeed)
    .controller("AnotherController", AnotherController);

  function YellowController(statefulService) {
    var vm = this;
    vm.values = {
      b: 5
    };
    vm.sharedValues = statefulService.sharedValues;
    vm.add = function add() {
      var a = parseInt(vm.sharedValues.a);
      var b = parseInt(vm.values.b);
      return a + b;
    };
  }

  function StatefulService() {
    this.sharedValues = {};
  }

  function DataFeed($interval, statefulService, $rootScope) {
    var intervalID;

    this.start = function() {
      // If you use bare setInterval, you will need to call $apply.
      // setInterval(function() {
      //   statefulService.sharedValues.a =
      //   parseInt(statefulService.sharedValues.a) + 1;
      //   $rootScope.$apply();
      // }, 2000);
      intervalID = $interval(function() {
        statefulService.sharedValues.a =
        parseInt(statefulService.sharedValues.a) + 1;
      }, 500);
    }

    this.stop = function() {
      $interval.cancel(intervalID);
    }
  }

  function AnotherController(dataFeed) {
    this.start =  dataFeed.start;
    this.stop =  dataFeed.stop;
  }

})(window.angular);
