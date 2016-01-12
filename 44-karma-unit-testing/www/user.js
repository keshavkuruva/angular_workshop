(function(angular) {
  'use strict';

  function UserController($scope) {
    $scope.user = {
      first_name: 'Barry',
      last_name: 'Allen'
    };

    $scope.fullName = function fullName(n) {
      return n.first_name + ' ' + n.last_name;
    };
  }

  angular.module('user', [])
    .controller('UserController', UserController);

})(window.angular);
