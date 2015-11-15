import { expect } from 'chai';
import { myMin } from '../examples';

describe('03_1:fizzbuzz', () => {

  it('myMin is a function', () => {
    expect(typeof myMin).to.equal('function');
  });

  it('returns minimum number', () => {
    expect(myMin(0, 10)).to.equal(0);
    expect(myMin(0, -10)).to.equal(-10);
  });
});
