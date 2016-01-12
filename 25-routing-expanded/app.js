(function (angular) {
  "use strict";

  angular.module("BootcampApp", ["ngRoute", "yellow", "green"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/blue", {
          templateUrl: "blue.html",
          controller: "BlueController",
          controllerAs: "bc",   // Not the only way to do this.
          myCustomName: 'Blue 1'
        })
        .when("/bLUe", {
          template: "<h1>I'm bLUe</h1>",
          myCustomName: 'Blue 2'
        })
        .when("/red", {
          templateUrl: "red.html",
          controller: "RedController as rc",
          caseInsensitiveMatch: true,
          myCustomName: 'Red'
        })
        .otherwise({
          redirectTo: "/blue"
        });

      // Can also be set globally:
      // $routeProvider.caseInsensitiveMatch = true;

      // We will see "resolve" and route events later
    })
    .directive('customHeader', function () {
      return {
        restrict: 'E',
        controller: function ($route) {
          this.getTitle = function () {
            return $route.current && $route.current.myCustomName;
          };
        },
        controllerAs: 'ch',
        templateUrl: 'header.html'
      };
    });
})(window.angular);
