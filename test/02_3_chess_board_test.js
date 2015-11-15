import { expect } from 'chai';
import { renderChess } from '../examples';

describe('02_3:chess', () => {

  it('renderChess is a function', () => {
    expect(typeof renderChess).to.equal('function');
  });

  it('should render chess board', () => {
    // hash (#) and white space (_) replaced due to vim macro removing
    // pending white space at the end of line
    var expectedResult =
        `
        □■□■□■□■
        ■□■□■□■□
        □■□■□■□■
        ■□■□■□■□
        □■□■□■□■
        ■□■□■□■□
        □■□■□■□■
        ■□■□■□■□
        `;

    // multiline strings (`like here`) keep white space / tabs / indentation
    // only for the purpose of the test
    expectedResult = expectedResult.replace(/[^\n|□|■]/gm, '').trimLeft();
    expect(renderChess()).to.equal(expectedResult);
  });
});
