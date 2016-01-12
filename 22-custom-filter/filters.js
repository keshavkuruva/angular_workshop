(function (angular, reverseString) {
  "use strict";

  angular.module('someFilters', [])

    .filter('trillionDollar', function () {
      return function trillionDollar(input) {
        return '$' + (input / 1000000000000) + ' trillion';
      };
    })

    .filter("reverse", function () {
      return reverseString;
    })

    .filter('initials', initials)
    .filter("oxfordComma", oxfordComma);

  function initials() {
    return function (input) {
      // What happens if we don't check for input?
      if (input) {
        // New York City
        var words = input.split(' ');
        // ['New', 'York', 'City']
        angular.forEach(words, function (word, index) {
          words[index] = word.slice(0, 1);
        });
        // ['N', 'Y', 'C']
        return words.join('');
        // NYC
      }
    }
  }

  function oxfordComma() {
    // This one takes an array of strings and returns a string
    return function (input) {
      if (angular.isArray(input)) {
        var arr = angular.copy(input);
        var last = arr.splice(-1);
        return arr.join(', ') + ', and ' + last;
      }
    };
  }

})(window.angular, window.reverseString);
