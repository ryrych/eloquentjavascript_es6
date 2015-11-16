import { expect } from 'chai';
import { countBeans } from '../examples';

describe('03_3:countBeans', () => {

  it('countBeans is a function', () => {
    expect(typeof countBeans).to.equal('function');
  });

  it('counts `B` characters in given string', () => {
    expect(countBeans('BBC')).to.equal(2);
  });
});
