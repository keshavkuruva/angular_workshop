(function (angular) {
  "use strict";

  angular.module("BootcampApp", ["ngRoute", "yellow"])    // no other modules?
    .config(function ($routeProvider) {
      $routeProvider
        .when("/blue", {
          templateUrl: "blue.html",
          controller: "BlueController",
          controllerAs: "bc",   // Not the only way to do this.
          // You can add your own extra fields:
          pageTitleNotBuiltIn: "BLUE-ISH"
        })
        .when("/bLUe", {
          template: "<h1>I'm bLUe</h1>",
          pageTitleNotBuiltIn: "BLUE-ISH"
        })
        .when("/red", {
          templateUrl: "red.html",
          controller: "RedController as rc",
          caseInsensitiveMatch: true,
          pageTitleNotBuiltIn: "RED-ISH"
        })
        .otherwise({
          redirectTo: "/blue"
        });

      // Can also be set globally:
      // $routeProvider.caseInsensitiveMatch = true;

      // We will see "resolve" later.
    })

    .run(function ($rootScope, $route) {
      // listen for event, update title
      $rootScope.title = "Starting title";
      // This is a scope event, covered in more depth later
      $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.title = $route.current.pageTitleNotBuiltIn;
      });
    });

})(window.angular);
