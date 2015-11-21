// https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

import { expect } from 'chai';
import { countdown } from '../examples';

describe('goes on operator', () => {
  // http://stackoverflow.com/questions/1642028/what-is-the-name-of-the-operator
  it('is not an operator. It is in fact two separate operators, -- and >', () => {
    expect(countdown(5)).to.equal('puk, puk, puk, puk, puk');
    expect(countdown(1)).to.equal('puk, CBA! Jest pan aresztowany!');
  });
});
