console.log = () => {};
const { expect } = require('chai');
const myModule = require('../index')

describe('', () => {
  it('The function should return `5` if the `target` is equal to the first `indexToCheck` value, 28.', () => {

    const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
    const target = 28;
    const expectedResult = 5;

    const actualResult = myModule.binarySearch(searchable, target);

    expect(actualResult).to.equal(expectedResult);
  });

  it('The function should return `null` if the `target` is not in the array.', () => {
    const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
    const target = 27;

    const actualResult = myModule.binarySearch(searchable, target);

    expect(actualResult).to.be.null;
  });

  it('The function should return `null` if the `target` is in the array and not the middle index. In the next commit I will fix this implementation.', () => {
    const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
    const target = 41;

    const actualResult = myModule.binarySearch(searchable, target);

    expect(actualResult).to.be.null;
  });
});
