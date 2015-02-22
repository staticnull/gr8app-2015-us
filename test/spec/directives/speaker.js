'use strict';

describe('Directive: speaker', function () {

  // load the directive's module
  beforeEach(module('gr8app2015App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<speaker></speaker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the speaker directive');
  }));
});
