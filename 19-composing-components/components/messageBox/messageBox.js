(function (angular) {
  "use strict";

  angular.module("messageBox", [])

    .directive("messageBox", function () {
      return {
        restrict: "E",
        templateUrl: "components/messageBox/messageBox.html",
        scope: {
          "message": "@msg"
        },
        controller: function () { },
        controllerAs: 'mbc',
        bindToController: true
      };
    });

})(window.angular);
