import { expect } from 'chai';
import { isEven } from '../examples';

describe('03_2:isEven', () => {

  it('isEven is a function', () => {
    expect(typeof isEven).to.equal('function');
  });

  it('checks if number is even', () => {
    expect(isEven(50)).to.be.true;
    expect(isEven(75)).to.be.false;
  });
});
