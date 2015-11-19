import { expect } from 'chai';
import { reverseArray, reverseArrayInPlace } from '../examples';

describe('04_2:reverseArray', () => {
  it('reverseArray is a function', () => {
    expect(typeof reverseArray).to.equal('function');
  });

  it('returns new array', () => {
    var arrayValue = ['A', 'B', 'C'];
    expect(reverseArray(arrayValue)).to.eql(['C', 'B', 'A']);
    expect(arrayValue).to.eql(['A', 'B', 'C']);
  });
});

describe('04_2:reverseArrayInPlace', () => {
  it('reverseArrayInPlace is a function', () => {
    expect(typeof reverseArrayInPlace).to.equal('function');
  });

  it('reverses array in place', () => {
    var arrayValue = [1, 2, 3, 4, 5];
    expect(reverseArrayInPlace(arrayValue)).to.eql([5, 4, 3, 2, 1]);
    expect(arrayValue).to.eql([5, 4, 3, 2, 1]);
  });
});
