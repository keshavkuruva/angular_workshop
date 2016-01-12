
describe('The user module', function() {
  beforeEach(module('user'));

  var UserController, $scope;
  beforeEach(inject(function($controller, $rootScope) {
    $scope = $rootScope.$new();
    UserController = $controller('UserController', {$scope: $scope});
  }));

  it('should initialize the user name', function() {
    expect($scope.user.first_name).toEqual('Barry');
    expect($scope.user.last_name).toEqual('Allen');
  });

  it('should return the full name', function() {
    var user = {
      first_name: 'Oliver',
      last_name: 'Queen'
    };
    expect($scope.fullName(user)).toEqual('Oliver Queen');
  });
});

