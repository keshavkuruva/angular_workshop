(function (angular) {
  "use strict";

  angular.module('exampleApp', [])
    .directive('outline', function () {
      return {
        restrict: 'A',
        // element is already wrapped in a jqlite object
        link: function (scope, element, attrs) {
          element.css({
            border: '1px solid green'
          });
        }
      };
    })
    .directive('blink', function ($interval) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          var on = true;
          var intervalId = $interval(function () {
            on = !on;
            element.css({
              display: on ? 'inline-block' : 'none'
            });
          }, 500);

          element.on('$destroy', function () {
            $interval.cancel(intervalId);
          });
        }
      };
    });

})(window.angular);
