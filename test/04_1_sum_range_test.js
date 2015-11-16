import { expect } from 'chai';
import { range, sum } from '../examples';

describe('04_1:range', () => {
  it('range is a function', () => {
    expect(typeof range).to.equal('function');
  });

  it('returns range of numbers', () => {
    let expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(range(1, 10)).to.deep.equal(expectedResult);
  });

  it('takes optional step param', () => {
    expect(range(1, 10, 2)).to.deep.equal([1, 3, 5, 7, 9]);
    expect(range(5, 2, -1)).to.deep.equal([5, 4, 3, 2]);
  });
});

describe('04_1:sum', () => {
  it('sum is a function', () => {
    expect(typeof sum).to.equal('function');
  });

  it('sums numbers from given range', () => {
    expect(sum(range(1, 10))).to.equal(55);
  });

  it('sums numbers from given range with step defined', () => {
    expect(sum(range(5, 2, -1))).to.equal(14);
  });
});
