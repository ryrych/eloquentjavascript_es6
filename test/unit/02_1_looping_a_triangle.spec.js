import { expect } from 'chai';
import { renderTriangle } from '../../src/02_1_looping_a_triangle';

describe('02_01:looping a triangle', () => {

  it('renderTriangle is a function', () => {
    expect(typeof renderTriangle).to.equal('function');
  });

  it('should render triangle with default params', () => {
    var expectedResult =
        `
        #
        ##
        ###
        ####
        #####
        ######
        #######
        `;

    // multiline strings (`like here`) keep white space / tabs / indentation
    // only for the purpose of the test
    expectedResult = expectedResult.replace(/[^#\n]/gm, '').trimLeft();
    expect(renderTriangle()).to.equal(expectedResult);
  });

  it('should render triangle with custom count & sign', () => {
    var expectedResult =
        `
        $
        $$
        `;

    // multiline strings (`like here`) keep white space / tabs / indentation
    // only for the purpose of the test
    expectedResult = expectedResult.replace(/[^$\n]/gm, '').trimLeft();
    expect(renderTriangle(3, '$')).to.equal(expectedResult);
  });
});
