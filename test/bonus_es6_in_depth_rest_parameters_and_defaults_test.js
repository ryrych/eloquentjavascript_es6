// https://hacks.mozilla.org/2015/05/es6-in-depth-rest-parameters-and-default

import { expect } from 'chai';
import { containsAll, animalSentence, animalSentenceFancy } from '../examples';

describe('`for (var value of arary)`', () => {
  it('is better than the old `for` loop!', () => {
    expect(containsAll('banana', 'b', 'nan')).to.be.true;
    expect(containsAll('banana', 'c', 'nan')).to.be.false;
  });
});

describe('defaults params', () => {
  it('function can have default params', () => {
    expect(animalSentence()).to.equal('Lions and tigers and bears! Oh my!');
    expect(animalSentence('monkeys')).to.equal('Lions and monkeys and bears! Oh my!');
    expect(animalSentence('monkeys', 'elephants')).to.equal('Lions and monkeys and elephants! Oh my!');
  });

  it('default value expressions are evaluated at function call time', () => {
    expect(animalSentenceFancy()).to.equal('Lions and tigers and bears! Oh my!');
    expect(animalSentenceFancy('bears')).to.equal('Lions and bears and sealions! Oh my!');
    expect(animalSentenceFancy('kurczaks')).to.equal('Lions and kurczaks and bears! Oh my!');
  });
});
