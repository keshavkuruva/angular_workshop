(function (angular) {
  "use strict";

  angular.module('exampleApp', ['apiExamples', 'countries'])
    .constant('NOTQUITEPI', 3)
    .value('closerToPi', 3.14159);

})(window.angular);
