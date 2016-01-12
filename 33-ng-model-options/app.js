;(function () {
  'use strict';

  function ModelOptionsController() {
    var val = '';
    this.getterSetter = function (newVal) {
      return arguments.length ? (val = newVal) : val;
    }
  }

  function AppController() {

  }

  angular.module('app', [])
    .controller('ModelOptionsController', ModelOptionsController)
    .controller('AppController', AppController);
})();
