(function (angular) {
  'use strict';

  function GreenController() {
    this.message = "Hello Green World!";
  }

  angular.module('BootcampApp')
    .config(function ($routeProvider) {
      $routeProvider.when('/green', {
        templateUrl: 'green.html',
        controller: GreenController,
        controllerAs: 'gc',
        pageTitleNotBuiltIn: "GREEN-ISH"
      });
    });

})(window.angular)
