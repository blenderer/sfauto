/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('SfAcRegistry', () => {
  let service;

  beforeEach(module('sfautocomplete'));

  beforeEach(inject((SfAcRegistry) => {
    service = SfAcRegistry;
  }));

  it('should equal SfAcRegistry', () => {
    expect(service.get()).to.equal('SfAcRegistry');
  });
});
