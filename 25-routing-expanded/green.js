(function (angular) {
  'use strict';

  // If you define the routes in each feature module, you don't need .controller

  function GreenController() {
    this.message = "Hello Green World!";
  }

  angular.module('green', [])
    .config(function ($routeProvider) {
      $routeProvider.when('/green', {
        templateUrl: 'green.html',
        controller: GreenController,
        controllerAs: 'gc',
        myCustomName: 'Green'
      });
    });

})(window.angular)
