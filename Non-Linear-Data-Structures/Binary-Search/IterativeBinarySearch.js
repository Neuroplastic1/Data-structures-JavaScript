const binarySearch = (arr, target) => {
// 
  let left = 0;
  let right = arr.length;
  // while loop that continues to execute
  // until the left index equals the right index
  while (right > left) {
    // find the value of the middle index
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    // return the index if the value is equal to the target
    if (checking === target) {
      return indexToCheck;
    // if target is greater than the value
    } else if (checking < target) {
      // set left equal to current index plus one
      left = indexToCheck + 1;
    // if target is less than the value
    } else {
      // set right equal to the current index
      right = indexToCheck;
    }
  }
  return null;
  }

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 28;

console.log(binarySearch(searchable, target));

module.exports = {binarySearch};
