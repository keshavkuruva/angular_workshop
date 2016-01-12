(function(angular) {
  'use strict';

  angular.module('apiExamples', [])

  .controller('AController', function (myService, myFactory, justSayHello) {
    this.greeting1 = myService.sayHello("Joe");
    this.greeting2 = myFactory.sayHello("Joe");
    this.greeting3 = justSayHello("Joe");
  })

  .service('myService', function ( /* DI */ ) {
    // service is just a constructor function
    // that will be called with 'new'
    var that = this;
    this.sayHello = function (name) {
      return "Hi " + name + "!";
    };
    this.fullGreeting = function (n) {
      return "Greetings;" + that.sayHello(n);
    };
  })

  .factory('myFactory', function ( /* DI */ ) {
    // factory returns an object
    // you can run some code before
    function sayHello(name) {
      return "Hi " + name + "!";
    }
    function fullGreeting(n) {
      return "Greetings;" + sayHello(n);
    }
    return {
      sayHello: sayHello,
      fullGreeting: fullGreeting
    };
  })

  .factory('justSayHello', function ( /* DI */ ) {
    return function justSayHello(name) {
      return "Hi " + name + "!";
    };
  });

  /* Javascript constructor functions look like this:
  function Foo() {
    this.that = "eee";
  }

  var s = new Foo();

  var f = {  };
  */

})(window.angular);
