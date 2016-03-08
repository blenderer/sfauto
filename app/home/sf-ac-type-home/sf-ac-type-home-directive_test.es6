/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sfAcTypeHome', () => {
  let scope
    , element;

  beforeEach(module('home', 'home/sf-ac-type-home-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sf-ac-type-home></sf-ac-type-home>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().sfAcTypeHome.name).to.equal('sfAcTypeHome');
  });
});
