(function (angular) {
  "use strict";

  // What happens when we rearrange the dependencies?
  // What happens when we minify?
  function InjectionController($log, $timeout, $interval, $location) {
    var ic = this;

    function writeToLog() {
      $log.info('Hello World');
    }

    ic.counter = 1;
    ic.url = $location.absUrl();

    function incCounter() {
      ic.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('app', [])
    .controller('InjectionController', InjectionController)

})(window.angular);
