(function (angular) {
  "use strict";

  function DemoController($sce) {
    this.unsafeHtml = '<a onmouseover="this.textContent=\'Executing potentially dangerous code!\'" href="http://angularbootcamp.com">Angular Bootcamp</a>';
    this.trustedHtml = $sce.trustAsHtml(this.unsafeHtml);
  }

  // We get $sanitize applied to ng-bind-html just by including the ngSanitize module
  angular.module('app', ['ngSanitize'])
    .controller('DemoController', DemoController);

})(window.angular);
