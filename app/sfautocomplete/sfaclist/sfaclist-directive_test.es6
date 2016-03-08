/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sfaclist', () => {
  let scope
    , element;

  beforeEach(module('sfautocomplete', 'sfautocomplete/sfaclist/sfaclist-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sfaclist></sfaclist>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().sfaclist.name).to.equal('sfaclist');
  });
});
