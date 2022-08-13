  
  
  const swap = (arr, indexOne, indexTwo) => {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
  };


  const bubbleSort = input => {
    let swapCount = 0
    let swapping = true;
    
    while (swapping) {
      swapping = false;
      for (let i = 0; i < input.length - 1; i++) {
        // conditioning: smallest to largest 
        if (input[i] > input[i + 1]) {
          swap(input, i, i + 1);
          swapCount++;
          swapping = true;
        }
      }
    }
    console.log(`Swapped ${swapCount} times`);
    return console.log(input);
  };
  
  bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1] )
  bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])


  