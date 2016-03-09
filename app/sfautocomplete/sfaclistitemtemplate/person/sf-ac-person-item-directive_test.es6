/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sfAcPersonItem', () => {
  let scope
    , element;

  beforeEach(module('sfautocomplete', 'sfautocomplete/sfaclistitemtemplate/person/sf-ac-person-item-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sf-ac-person-item></sf-ac-person-item>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().sfAcPersonItem.name).to.equal('sfAcPersonItem');
  });
});
