/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SfautocompleteCtrl', () => {
  let ctrl;

  beforeEach(module('sfautocomplete'));

  beforeEach(inject(($rootScope, $controller) => {
    ctrl = $controller('SfautocompleteCtrl');
  }));

  it('should have ctrlName as SfautocompleteCtrl', () => {
    expect(ctrl.ctrlName).to.equal('SfautocompleteCtrl');
  });
});
