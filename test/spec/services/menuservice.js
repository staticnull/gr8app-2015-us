'use strict';

describe('Service: MenuService', function () {

  // load the service's module
  beforeEach(module('gr8app2015App'));

  // instantiate service
  var MenuService;
  beforeEach(inject(function (_MenuService_) {
    MenuService = _MenuService_;
  }));

  it('should do something', function () {
    expect(!!MenuService).toBe(true);
  });

});
