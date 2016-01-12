(function(angular) {
  'use strict';

  function EmployeeController($scope, employees) {
    employees.getFullTimers().then(function (data) {
      $scope.empList = data;
    });
  }

  angular.module('employeeView', ['utils'])
    .controller('EmployeeController', EmployeeController);


})(window.angular);
