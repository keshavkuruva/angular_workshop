(function (angular) {
  "use strict";

  angular.module('promisesModule', [])
    .controller('PromiseController', PromiseController)
    .service('promiseService', PromiseService);

  function PromiseController(promiseService) {
    var pc = this;
    promiseService.calculate().then(function (data) {
      pc.answer = data;
    });
  }

  function PromiseService ($http, $timeout, $interval, $q) {
    // TODO change this to not use the defer() API yet.
    this.calculate = function () {
      function extractData(response) {
        return response.data;
      }
      var p1 = $http.get("../demo-data/shapes.json").then(extractData);
      var p2 = $timeout(function () {
        return 3;
      }, 2000);
      var p3 = $http.get("../demo-data/colors.json").then(extractData);
      var p4 = $interval(function () {
        return 4;
      }, 500, 4);

      // Using more than one plain function together looks like this:
      // function aa() {}
      // function bb() { throw "444"}
      // function cc() {}
      // function dd() {
      //   aa();
      //   bb();
      //   cc();
      // }

      // Verbose, and serial:
      p1.then(function(v) {
        p2.then(function(v2) {
          p3.then(function(v3) {
            p4.then(function (v4) {
              console.log('answer-serial: ', v, v2, v3, v4);
              console.log('length of http responses: ', v3.length + v.length)
            });
          });
        });
      });

      // Concise, and "parallel".
      return $q.all([p1, p2, p3, p4]).then(function(answers) {
        console.log('length of http responses: ', answers[0].length + answers[2].length)
        return answers;
      }).catch(function(e) {
        console.error("errorfrom $q all", e);
      });
    }
  }

})(window.angular);
