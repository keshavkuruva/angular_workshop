(function () {

  function MyFunction(params) {
    return "<h1>Dynamic template</h1><p>" +
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
          template: MyFunction,  //called with route parameters
          controller: YellowController,
          controllerAs: "yc",
          pageTitleNotBuiltIn: "YELLOW-ISH"
        });
    });
})(window.angular);
