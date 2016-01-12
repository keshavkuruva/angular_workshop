describe('The user module', () => {
  beforeEach(module('app'));

  var countryControllerInstance;
  beforeEach(inject(($controller) => {
    countryControllerInstance = $controller('CountryController');
  }));

  it('should initialize the user name', () => {
    expect(countryControllerInstance.countries.length).toEqual(7);
  });
});
