// https://hacks.mozilla.org/2015/06/es6-in-depth-babel-and-broccoli/

import { expect } from 'chai';
import { fruits, printColors } from '../examples';

describe('fruits', () => {
  it('returns array of products', () => {
    let expectedResult = ['ID: 100 Name: strawberry', 'ID: 101 Name: grapefruit', 'ID: 102 Name: plum'];
    expect(fruits()).to.eql(expectedResult);
  });
});

describe('second example', () => {
  it('returns array of products', () => {
    let expectedResult = ['#900', '#910', '#920', '#930', '#940', '#950', '#960', '#970', '#980', '#990'];
    expect(printColors()).to.eql(expectedResult);
  });
});
