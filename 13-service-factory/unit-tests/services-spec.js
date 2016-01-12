describe('The exampleApp module', function() {
  beforeEach(module('exampleApp'));

  describe('myService', function() {
    var myService;
    beforeEach(inject(function(_myService_) {
      myService = _myService_;
    }));

    it('should say hello', function() {
      // write a failing test first
      var result = 'Hi Joe!';
      expect(myService.sayHello('John')).toEqual(result);
    });
  });
});
