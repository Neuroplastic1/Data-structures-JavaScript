// recursiveSum() recursively finds the sum of a number
// and all positive numbers less than it
const recursiveSum = (n) => {
  // basecase
  if (n === 1) {
    console.log(n)
    return 1;
  }
  // recursive case
  if (n > 0){
    console.log(n)
    return recursiveSum(n - 1) + n;
  }
}

console.log(recursiveSum(4))
