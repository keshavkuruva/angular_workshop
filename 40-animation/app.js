(function (angular) {
  "use strict";

  angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatServices'
  ])

    .config(
      function ($routeProvider) {
        $routeProvider.
          when('/phones', {
            templateUrl: 'phone-list.html',
            controller: 'PhoneListCtrl'
          }).
          when('/phones/:phoneId', {
            templateUrl: 'phone-detail.html',
            controller: 'PhoneDetailCtrl'
          }).
          otherwise({
            redirectTo: '/phones'
          });
      })

    .controller('PhoneListCtrl',
      function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
      })

    .controller('PhoneDetailCtrl',
      function ($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
          $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
          $scope.mainImageUrl = imageUrl;
        };
      });

})(window.angular);
