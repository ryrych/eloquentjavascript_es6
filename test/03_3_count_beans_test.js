import { expect } from 'chai';
import { countBeans, countChar } from '../examples';

describe('03_3:countBeans', () => {

  it('countBeans is a function', () => {
    expect(typeof countBeans).to.equal('function');
  });

  it('counts `B` characters in given string', () => {
    expect(countBeans('BBC')).to.equal(2);
  });
});

describe('03_3:countChar', () => {

  it('countBeans is a function', () => {
    expect(typeof countChar).to.equal('function');
  });

  it('counts number of chacater occurance in given string', () => {
    expect(countChar('kakkerlak', 'k')).to.equal(4);
  });
});
