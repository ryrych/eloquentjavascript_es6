import { expect } from 'chai';
import { fizzbuzz } from '../examples';

describe('02_2:fizzbuzz', () => {

  it('fizzbuzz is a function', () => {
    expect(typeof fizzbuzz).to.equal('function');
  });

  it('fizzbuzzes the output', () => {
    var expectedResult = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];
    expect(fizzbuzz(10)).to.eql(expectedResult);
  });
});
