/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('Sfacservice', () => {
  let service;

  beforeEach(module('sfautocomplete'));

  beforeEach(inject((Sfacservice) => {
    service = Sfacservice;
  }));

  it('should equal Sfacservice', () => {
    expect(service.get()).to.equal('Sfacservice');
  });
});
