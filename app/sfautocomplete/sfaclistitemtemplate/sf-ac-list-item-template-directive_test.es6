/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('sfAcListItemTemplate', () => {
  let scope
    , element;

  beforeEach(module('sfautocomplete', 'sfautocomplete/sfaclistitemtemplate/sf-ac-list-item-template-directive.tpl.html'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    element = $compile(angular.element('<sf-ac-list-item-template></sf-ac-list-item-template>'))(scope);
  }));

  it('should have correct text', () => {
    scope.$apply();
    expect(element.isolateScope().sfAcListItemTemplate.name).to.equal('sfAcListItemTemplate');
  });
});
