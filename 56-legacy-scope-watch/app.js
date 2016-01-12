(function (angular) {
  "use strict";

  angular.module('app1', [])

    .controller('TopCtrl', function TopCtrl($scope) {
      var tc = this;

      tc.title = function title() {
        return "Title Goes Here";
      };

      // tc in the watch is NOT the tc above!
      $scope.$watch("tc.a + tc.b", function (n, o) {
        tc.total = parseInt(tc.a) + parseInt(tc.b);
      });

      // function approach instead:
      // $scope.$watch(function () {
      //   return tc.a + "anything" + tc.b;
      // },
      //   function (n, o) {
      //     tc.total = parseInt(tc.a) + parseInt(tc.b);
      //   });

      // Yet another way:
      // $scope.$watch(function () {
      //   return { a: tc.a, b: tc.b };
      // },
      //   function (n, o) {
      //     tc.total = parseInt(tc.a) + parseInt(tc.b);
      //   }, true);

      // $scope.$watch( ... ... , false)
      // $scope.$watchCollection( ... ... )
      // $scope.$watch( ... ... , true)

    });
})(window.angular);
