(function (angular) {
  "use strict";

  function ListenerController($scope) {
    $scope.$on("nameChange", function (event, newName) {
      // This can cause trouble in some IEs
      console.log(event);
      $scope.childName = newName;
    });
  }

  function EmitController($scope) {
    $scope.name = "John";
    $scope.changeName = function () {
      $scope.$emit("nameChange", $scope.name);
    };
  }

  angular.module("exampleApp", [])
    .controller("ListenerController", ListenerController)
    .controller("EmitController", EmitController);

})(window.angular);
