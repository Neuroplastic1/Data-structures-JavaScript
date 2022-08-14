## Merge sort

### Merge sort algorithm consists of two distinct steps:

    1 . Splitting the input array – The algorithm recursively splits the input array until each element is in its own array. This portion of the algorithm is represented in the top half of the image.

    2 . Merging sorted arrays – The algorithm compares and combines the elements of arrays until the input array is sorted. This is shown in the bottom half of the image.

![image](https://user-images.githubusercontent.com/64027495/184519460-94c56d9b-a422-45d1-82e6-7ebcce29189a.png)

## Code Implementation

### Splitting: Base Case

The base case of this recursive function is when the input array has only one element in it.

```js
const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }
};
```

### Splitting: Recursive Case
The recursive case of our mergeSort() function requires that we first split the input array into a leftArray and rightArray:

```js
const mid = Math.floor(length / 2);
const leftArray = startArray.slice(0, mid);
const rightArray = startArray.slice(mid, length)
```
Next, we pass the left and right arrays into the mergeSort() function:

```js
return merge(mergeSort(leftArray), mergeSort(rightArray))
```
### Call merge() from mergeSort()

At this point, we have a function that recursively splits the input array until each element is in a single-element array.

 The final step is to call the function that is responsible for merging the leftArray and rightArray

### Merge()
Arguments: two sorted lists as inputs (leftArray and rightArray)
Returns: a sorted list with the elements of leftArray and rightArray combined. Calling this new array sortedArray

```js
const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }
  
  return sortedArray.concat(leftArray).concat(rightArray)
}
```