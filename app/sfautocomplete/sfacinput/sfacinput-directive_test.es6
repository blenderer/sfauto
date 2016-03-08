/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sfacinput', () => {
  let scope
    , element;

  beforeEach(module('sfautocomplete', 'sfautocomplete/sfacinput-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sfacinput></sfacinput>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().sfacinput.name).to.equal('sfacinput');
  });
});
