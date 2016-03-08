/* global describe, beforeEach, it, browser */
'use strict';

import SfautocompletePage from './sfautocomplete.po';

let chai = require('chai')
  , chaiAsPromised = require('chai-as-promised')
  , expect = chai.expect;

chai.use(chaiAsPromised);

describe('Sfautocomplete page', () => {
  let sfautocompletePage;

  beforeEach(() => {
    sfautocompletePage = new SfautocompletePage();
    browser.get('/#/sfautocomplete');
  });

  it('should say SfautocompleteCtrl', () => {
    expect(sfautocompletePage.heading.getText()).to.eventually.equal('sfautocomplete');
    expect(sfautocompletePage.text.getText()).to.eventually.equal('SfautocompleteCtrl');
  });
});
