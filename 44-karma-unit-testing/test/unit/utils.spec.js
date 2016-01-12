
describe('The utils module', function() {
  beforeEach(module('utils'));

  describe('basicMath service', function() {
    var basicMath;
    beforeEach(inject(function(_basicMath_) {
      basicMath = _basicMath_;
    }));

    it('should add two numbers', function() {
      expect(basicMath.add(3, 4)).toEqual(7);
    });

    it('should subtract two numbers', function() {
      expect(basicMath.subtract(5, 3)).toEqual(2);
    });
  });

  describe('employees service', function() {
    var employees, http, dataList;
    beforeEach(inject(function(_employees_, $httpBackend) {
      employees = _employees_;
      http = $httpBackend;

      dataList = [
        {"id":1,"first_name":"Henry","last_name":"Holmes","email":"hholmes0@goodreads.com","hours_worked":29,"hourly_wage":19},
        {"id":2,"first_name":"Harold","last_name":"Cox","email":"hcox1@who.int","hours_worked":18,"hourly_wage":11},
        {"id":3,"first_name":"Brian","last_name":"Garcia","email":"bgarcia2@addthis.com","hours_worked":4,"hourly_wage":17},
        {"id":4,"first_name":"Patricia","last_name":"Young","email":"pyoung3@wix.com","hours_worked":47,"hourly_wage":12},
        {"id":5,"first_name":"Jose","last_name":"Jacobs","email":"jjacobs4@prweb.com","hours_worked":45,"hourly_wage":12}
      ];

      http.whenGET('../../demo-data/employees.json').respond(dataList);
    }));

    it('should retrieve all employees', function() {
      employees.getAll().then(function(data) {
        expect(data.length).toEqual(5);
      });

      // Remove flush() - nothing fails, because the above assertion is never run.
      http.flush();
    });

    it('should retrieve just the full-timers', function() {
      var fullTimers = [
        {"id":4,"first_name":"Patricia","last_name":"Young","email":"pyoung3@wix.com","hours_worked":47,"hourly_wage":12},
        {"id":5,"first_name":"Jose","last_name":"Jacobs","email":"jjacobs4@prweb.com","hours_worked":45,"hourly_wage":12}
      ]

      // Change this URL, test fails
      http.expectGET('../../demo-data/employees.json');

      employees.getFullTimers().then(function(data) {
        expect(data.length).toEqual(2);
        expect(data).toEqual(fullTimers);
      });

      http.flush();
    });

  });

});

