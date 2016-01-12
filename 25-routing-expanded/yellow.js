(function (angular) {

  function myFunction(params) {
    return "<bread-crumb></bread-crumb><h1>Dynamic template</h1><p>" +
      JSON.stringify(params) +
      "</p><p>{{yc.message}}</p>";
  }

  function YellowController() {
    this.message = "Hello Yellow World!";
  }

  angular.module('yellow', ['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/yellow/:id", {
          template: myFunction,  //called with route parameters
          controller: YellowController,
          controllerAs: "yc",
          myCustomName: 'Yellow'
        });
    });
})(window.angular);
