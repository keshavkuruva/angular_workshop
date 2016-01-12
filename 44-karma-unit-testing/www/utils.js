(function(angular) {
  'use strict';

  function basicMath() {
    this.add = function add(a, b) {
      return parseInt(a) + parseInt(b);
    }
    this.subtract = function add(a, b) {
      return parseInt(a) - parseInt(b);
    }
  }

  function employees($http) {
    var that = this;

    function unwrapData(response) {
      return response.data;
    }

    this.getAll = function() {
      return $http.get('../../demo-data/employees.json')
        .then(unwrapData);
    };

    this.getFullTimers = function() {
      var fullTimers = [];
      return that.getAll().then(function(list) {
        angular.forEach(list, function(emp) {
          if (emp.hours_worked >= 40) {
            fullTimers.push(emp);
          }
        });
        return fullTimers;
      });
    };
  }

  angular.module('utils', [])
    .service('basicMath', basicMath)
    .service('employees', employees);

})(window.angular);
