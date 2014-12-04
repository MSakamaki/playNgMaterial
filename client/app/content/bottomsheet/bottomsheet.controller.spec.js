'use strict';

describe('Controller: BottomsheetCtrl', function () {

  // load the controller's module
  beforeEach(module('playNgMaterialApp'));

  var BottomsheetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BottomsheetCtrl = $controller('BottomsheetCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
